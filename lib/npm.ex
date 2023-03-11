defmodule Npm do
  def downloaded(packagename, start, ending) do
    registry = "https://api.npmjs.org"
    path = "/downloads/point/" <> "#{start}" <> ":" <> "#{ending}" <> "/" <> "#{packagename}"

    case Finch.build(:get, registry <> path) |> Finch.request(Npm.Finch) do
      {:ok, %{body: body}} -> Jason.decode!(body)
      {:error, reason} -> reason
    end
  end

  def find(s, starting, ending) do
    Stream.resource(
      fn ->
        {search(s, 0), 0}
      end,
      fn {data, idx} ->
        case search(s, 25 * idx) do
          [] -> {:halt, data}
          res -> {[res], {data, idx + 1}}
        end
      end,
      fn data -> List.flatten(data) end
    )
    |> Enum.to_list()
    |> List.flatten()
    |> Task.async_stream(&downloaded(&1, starting, ending))
    |> Stream.map(fn {:ok, result} -> result end)
    |> Enum.sort_by(fn result -> result["downloads"] end, :desc)
    |> Poison.encode!(%{pretty: true, indent: 2})
    |> then(&File.write!("aws-npm-packages.json", &1))
  end

  def search(s, from \\ 0) do
    url = "https://api.npms.io/v2/search"

    case Finch.build(:get, url <> "?q=#{s}&size=25&from=#{from}")
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
