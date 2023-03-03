defmodule Builder do
  def run do
    Path.wildcard("../serverless-patterns/*/example-*.json")
    |> Stream.map(&File.read!/1)
    |> Stream.map(fn chunk ->
      case Poison.decode(chunk) do
        {:ok, json} -> json
        {:error, _} -> nil
      end
    end)
    |> Poison.encode!(%{pretty: true, indent: 2})
    |> then(fn list -> File.write!("result.json", list) end)
  end
end
