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
         {:ok, response} <- Jason.decode(result) do
      response
    else
      {:error, reason} -> reason
    end
  end

  def find(save? \\ false, string \\ @search, starting \\ @starting, ending \\ @ending) do
    check_response = fn response ->
      case response do
        {:ok, result} ->
          result

        {:error, reason} ->
          {:error, reason}
      end
    end

    save_to_file = fn list ->
      Logger.info(%{length: length(list)})

      Task.start(fn ->
        case Poison.encode(list, %{pretty: true, indent: 2}) do
          {:ok, result} -> File.write!("../aws-npm-packages.json", result)
          {:error, reason} -> reason
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

    try do
      Stream.resource(
        fn -> {[], 0} end,
        &next.(&1),
        fn _ -> nil end
      )
      |> Task.async_stream(&downloaded(&1, starting, ending))
      |> Stream.map(&check_response.(&1))
      |> Enum.sort_by(&Map.get(&1, "downloads"), :desc)
      |> tap(fn data -> if save?, do: save_to_file.(data) end)
      |> Enum.map(fn %{"downloads" => d, "package" => name} ->
        Map.put(%{}, name, d)
      end)
    rescue
      e ->
        Logger.warn(e)
        Process.sleep(1_000)
        find(string, starting, ending)
    end
  end

  def search(string, from \\ 0) do
    with {:ok, %{body: body}} <-
           Finch.build(:get, @search_point <> "?q=#{string}&size=25&from=#{from}")
           |> Finch.request(Back.Finch),
         {:ok, %{"results" => results, "total" => total}} <- Jason.decode(body) do
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
        reason
    end
  end
end
