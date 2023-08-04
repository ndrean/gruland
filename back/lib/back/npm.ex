defmodule Back.Npm do
  @moduledoc """
  Version using `Stream.resource`. Works on Fly.io.
  """
  require Logger

  @registry "https://api.npmjs.org"
  @search_point "https://api.npms.io/v2/search"
  @starting "2022-01-01"
  @ending "2023-01-01"
  @search "@aws-sdk/client"

  def downloaded(packagename, start, ending) do
    path =
      @registry <>
        "/downloads/point/" <> "#{start}" <> ":" <> "#{ending}" <> "/" <> "#{packagename}"

    with {:ok, %{body: result}} <-
           Finch.build(:get, path) |> Finch.request(Back.Finch),
         {:ok, response} <- Jsonrs.decode(result) do
      response
    else
      {:error, reason} ->
        {:error, reason}
    end
  end

  def find(save? \\ false, string \\ @search, starting \\ @starting, ending \\ @ending) do
    check_response = fn
      {:ok, response} -> response
      {:error, reason} -> reason
    end

    save_to_file = fn list ->
      Task.Supervisor.async_nolink(TSupervisor, fn ->
        case Jsonrs.encode(list, lean: true, pretty: true) do
          {:ok, result} -> File.write!("../aws-npm-packages.json", result)
          {:error, reason} -> {:error, reason}
        end
      end)
    end

    next = fn {data, page} ->
      {response, total} = search(string, 25 * page)

      case page * 25 >= total do
        true ->
          {:halt, data}

        false ->
          {response, {data, page + 1}}
      end
    end

    cross_data = fn
      nil ->
        {:error, :empty}

      %{"downloads" => d, "package" => name} ->
        Map.put(%{}, name, d)
    end

    try do
      {:ok,
       Stream.resource(
         fn -> {[], 0} end,
         &next.(&1),
         fn _ -> nil end
       )
       |> Task.async_stream(&downloaded(&1, starting, ending), timeout: 10_000)
       |> Stream.map(&check_response.(&1))
       |> Enum.sort_by(&Map.get(&1, "downloads"), :desc)
       |> tap(fn data -> if save?, do: save_to_file.(data) end)
       |> Enum.map(&cross_data.(&1))}
    rescue
      e ->
        Logger.warn(e)
        {:error, :emtpy}
        #     Process.sleep(1_000)
        #     find(string, starting, ending)
    end
  end

  def search(string, from \\ 0) do
    url =
      @search_point
      |> URI.new!()
      |> URI.append_query(URI.encode_query(%{q: string, size: 25, from: from}))
      |> URI.to_string()

    with {:ok, %{body: body}} <-
           Finch.build(:get, url)
           |> Finch.request(Back.Finch),
         {:ok, %{"results" => results, "total" => total}} <- Jsonrs.decode(body) do
      {
        Stream.filter(results, fn package ->
          Map.has_key?(package, "flags") === false &&
            get_in(package, ["package", "name"]) |> String.contains?(string)
        end)
        |> Stream.map(&get_in(&1, ["package", "name"])),
        total
      }
    else
      {:error, reason} ->
        {:error, reason}
    end
  end
end
