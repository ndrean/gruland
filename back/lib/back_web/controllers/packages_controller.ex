defmodule BackWeb.PackagesController do
  use BackWeb, :controller
  alias Back.Npm

  def index(conn, _params) do
    # packages = Npm.find("@grucloud")
    packages = Npm.find("@aws-sdk/client")
    render(conn, :index, packages: packages)
  end
end
