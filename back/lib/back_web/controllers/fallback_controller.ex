defmodule BackWeb.FallbackController do
  use BackWeb, :controller

  def call(conn, {:error, error}) do
    require Logger
    Logger.warn(error)

    conn
    |> put_status(:unprocessable_entity)
    |> json(error)
  end
end
