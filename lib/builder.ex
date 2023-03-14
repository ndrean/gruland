defmodule Builder do
  def run do
    Path.wildcard("../serverless-patterns/*/example-*.json")
    |> Stream.map(&File.read!/1)
    |> Stream.map(fn chunk ->
      with {:ok, json} <- Poison.decode(chunk) do
        case Map.has_key?(json, "title") do
          true ->
            Map.put_new(json, :id, UUID.uuid1())

          false ->
            nil
        end
      else
        {:error, _} ->
          nil
      end
    end)
    |> Stream.reject(fn chunk ->
      chunk == nil
    end)
    |> Poison.encode!(%{pretty: true, indent: 2})
    |> then(&File.write!("serverlessland-examples.json", &1))
  end
end
