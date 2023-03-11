defmodule Npm do
  def downloaded(packagename, start, ending) do
    registry = "https://api.npmjs.org"
    path = "/downloads/point/" <> "#{start}" <> ":" <> "#{ending}" <> "/" <> "#{packagename}"

    case Finch.build(:get, registry <> path) |> Finch.request(Npm.Finch) do
      {:ok, %{body: body}} -> Jason.decode!(body)
      {:error, reason} -> reason
    end
  end

  def find(string, starting, ending) do
    try do
      Stream.resource(
        fn ->
          {search(string, 0), 0}
        end,
        fn {data, page} ->
          case search(string, 25 * page) do
            [] -> {:halt, data}
            result -> {[result], {data, page + 1}}
          end
        end,
        fn data -> data |> List.flatten() end
      )
      |> Enum.to_list()
      |> List.flatten()
      |> Task.async_stream(&downloaded(&1, starting, ending))
      |> Stream.map(fn {:ok, result} -> result end)
      |> Enum.sort_by(fn result -> result["downloads"] end, :desc)
      |> Poison.encode!(%{pretty: true, indent: 2})
      |> then(&File.write!("aws-npm-packages.json", &1))
    rescue
      e in FunctionClauseError ->
        IO.inspect(e)
        Process.sleep(1_000)
        find(string, starting, ending)
    end
  end

  def search(string, from \\ 0) do
    url = "https://api.npms.io/v2/search"

    case Finch.build(:get, url <> "?q=#{string}&size=25&from=#{from}")
         |> Finch.stream(Npm.Finch, [], fn
           {:status, _status}, acc ->
             acc

           {:headers, _headers}, acc ->
             acc

           {:data, stream_data}, acc ->
             [stream_data | acc]
         end) do
      {:ok, result} ->
        Jason.decode!(result)
        |> Map.get("results")
        |> Stream.filter(fn package ->
          Map.has_key?(package, "flags") === false &&
            get_in(package, ["package", "name"]) |> String.contains?("@aws-sdk/client")
        end)
        |> Enum.map(&get_in(&1, ["package", "name"]))

      {:error, reason} ->
        IO.inspect(reason)
        []
    end
  end
end
