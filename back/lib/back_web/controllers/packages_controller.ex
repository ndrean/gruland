defmodule BackWeb.PackagesController do
  use BackWeb, :controller
  alias Back.Npm
  require Logger

  action_fallback(BackWeb.FallbackController)

  def index(conn, %{"p" => ""}) do
    with {:ok, pkg} <- Npm.find(false, "@grucloud") do
      json(conn, pkg)
    end
  end

  def index(conn, %{"p" => package}) do
    with {:ok, pkg} <- Npm.find(false, package) do
      json(conn, pkg)
    end
  end
end
