defmodule Back.NpmScan do
  @moduledoc """
  Version using `Stream.scan`. Failed to use with Fly.io.
  """
  require Logger

  @registry "https://api.npmjs.org"
  @search_point "https://api.npms.io/v2/search"
  @starting "2022-01-01"
  @ending "2023-01-01"
  @search "@aws-sdk/client"

  def downloaded(packagename, start, ending) do
    registry = @registry
    path = "/downloads/point/" <> "#{start}" <> ":" <> "#{ending}" <> "/" <> "#{packagename}"

    with {:ok, %{body: result}} <-
           Finch.build(:get, registry <> path) |> Finch.request(Back.Finch),
         {:ok, response} <- Jason.decode(result) do
      response
    else
      {:error, reason} -> reason
    end
  end

  def scan_for(string \\ "@grucloud") do
    1..round(Float.ceil(total(string) / 25))
    |> Stream.transform([], fn item, acc -> {search(string, item), acc} end)
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

    try do
      scan_for(string)
      |> Task.async_stream(&downloaded(&1, starting, ending))
      |> Stream.map(&check_response.(&1))
      |> Enum.sort_by(&Map.get(&1, "downloads"), :desc)
      |> tap(fn data -> if save?, do: save_to_file.(data) end)
      |> Enum.map(fn %{"downloads" => d, "package" => name} ->
        Map.put(%{}, name, d)
      end)
      |> Enum.uniq()
    rescue
      e ->
        Logger.warn(e)
        Process.sleep(1_000)
        find(string, starting, ending)
    end
  end

  def total(string, from \\ 0) do
    with {:ok, %{body: body}} <-
           Finch.build(:get, @search_point <> "?q=#{string}&size=25&from=#{from}")
           |> Finch.request(Back.Finch),
         {:ok, json} <- Jason.decode(body),
         {:ok, count} <- Map.fetch(json, "total") do
      count
    else
      {:error, reason} -> reason
    end
  end

  def search(string, from \\ 0) do
    with {:ok, %{body: body}} <-
           Finch.build(:get, @search_point <> "?q=#{string}&size=25&from=#{from}")
           |> Finch.request(Back.Finch),
         {:ok, %{"results" => results}} <- Jason.decode(body) do
      Stream.filter(results, fn package ->
        Map.has_key?(package, "flags") === false &&
          get_in(package, ["package", "name"]) |> String.contains?(string)
      end)
      |> Stream.map(&get_in(&1, ["package", "name"]))
    else
      {:error, reason} ->
        reason
    end
  end
end
