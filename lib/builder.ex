defmodule Builder do
  def run do
    Path.wildcard("../serverless-patterns/*/example-*.json")
    |> Stream.map(&File.read!/1)
    |> Stream.map(fn chunk ->
      case Poison.decode(chunk) do
        {:ok, json} ->
          Map.put_new(json, :id, UUID.uuid1())

        {:error, _} ->
          nil
      end
    end)
    |> Stream.reject(fn chunk -> chunk == nil end)
    |> Poison.encode!(%{pretty: true, indent: 2})
    |> then(&File.write!("result.json", &1))
  end
end
