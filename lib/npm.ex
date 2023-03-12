defmodule Npm do
  require Logger

  @registry "https://api.npmjs.org"

  def downloaded(packagename, start, ending) do
    registry = @registry
    path = "/downloads/point/" <> "#{start}" <> ":" <> "#{ending}" <> "/" <> "#{packagename}"

    case Finch.build(:get, registry <> path) |> Finch.request(Npm.Finch) do
      {:ok, %{body: body}} -> Jason.decode!(body)
      {:error, reason} -> Logger.debug(%{details: reason})
    end
  end

  @starting "2022-01-01"
  @ending "2023-01-01"
  @search "@aws-sdk/client"

  def find(string \\ @search, starting \\ @starting, ending \\ @ending) do
    try do
      Stream.resource(
        fn -> {[], 0} end,
        fn {data, page} ->
          {response, total} = search(string, 25 * page)

          case page * 25 >= total do
            true ->
              {:halt, data}

            false ->
              {[response] |> List.flatten(), {data, page + 1}}
          end
        end,
        fn _ -> nil end
      )
      |> Task.async_stream(&downloaded(&1, starting, ending))
      |> Stream.map(fn {:ok, result} -> result end)
      |> Enum.sort_by(fn result -> result["downloads"] end, :desc)
      |> tap(fn list -> Logger.info(%{length: length(list)}) end)
      |> Poison.encode!(%{pretty: true, indent: 2})
      |> then(&File.write!("aws-npm-packages.json", &1))
    rescue
      e ->
        IO.inspect(e)
        Process.sleep(1_000)
        find(string, starting, ending)
    end
  end

  # Npm.find("@aws-sdk/client", "2022-01-01", "2022-03-01")

  @search_point "https://api.npms.io/v2/search"

  def search(string, from \\ 0) do
    url = @search_point

    case Finch.build(:get, url <> "?q=#{string}&size=25&from=#{from}")
         |> Finch.request(Npm.Finch) do
      {:ok, %{body: result}} ->
        %{"results" => results, "total" => total} = Jason.decode!(result)

        {
          Enum.filter(results, fn package ->
            Map.has_key?(package, "flags") === false &&
              get_in(package, ["package", "name"]) |> String.contains?("@aws-sdk/client")
          end)
          |> Enum.map(&get_in(&1, ["package", "name"])),
          total
        }

      {:error, reason} ->
        Logger.warn(%{reason: reason})
    end
  end
end
