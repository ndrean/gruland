defmodule Npm do
  require Logger

  @registry "https://api.npmjs.org"
  @search_point "https://api.npms.io/v2/search"

  def downloaded(packagename, start, ending) do
    registry = @registry
    path = "/downloads/point/" <> "#{start}" <> ":" <> "#{ending}" <> "/" <> "#{packagename}"

    case Finch.build(:get, registry <> path) |> Finch.request(Npm.Finch) do
      {:ok, %{body: body}} ->
        case Jason.decode(body) do
          {:ok, response} -> response
          {:error, reason} -> {:error, reason}
        end

      {:error, reason} ->
        {:error, reason}
    end
  end

  @starting "2022-01-01"
  @ending "2023-01-01"
  @search "@aws-sdk/client"

  def find(string \\ @search, starting \\ @starting, ending \\ @ending) do
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
          {:ok, result} -> File.write!("aws-npm-packages.json", result)
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
      |> Enum.sort_by(
        fn result ->
          result["downloads"]
        end,
        :desc
      )
      |> tap(&save_to_file.(&1))
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
    case Finch.build(:get, @search_point <> "?q=#{string}&size=25&from=#{from}")
         |> Finch.request(Npm.Finch) do
      {:ok, %{body: result}} ->
        case Jason.decode(result) do
          {:ok, %{"results" => results, "total" => total}} ->
            {
              Enum.filter(results, fn package ->
                Map.has_key?(package, "flags") === false &&
                  get_in(package, ["package", "name"]) |> String.contains?("@aws-sdk/client")
              end)
              |> Enum.map(&get_in(&1, ["package", "name"])),
              total
            }

          {:error, reason} ->
            {:error, reason}
        end

      {:error, reason} ->
        {:error, reason}
    end
  end
end
