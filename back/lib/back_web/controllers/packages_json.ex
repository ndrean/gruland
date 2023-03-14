defmodule BackWeb.PackagesJSON do
  alias Back.Npm
  use BackWeb, :controller

  def index(%{packages: packages}) do
    packages
  end
end
