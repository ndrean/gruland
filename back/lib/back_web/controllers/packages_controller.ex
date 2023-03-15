defmodule BackWeb.PackagesController do
  use BackWeb, :controller
  alias Back.Npm

  action_fallback(BackWeb.FallbackController)

  def index(conn, %{"p" => package}) do
    packages =
      if package === "",
        do: Npm.find(false, "@grucloud"),
        else: Npm.find(false, package)

    json(conn, packages)
  end
end
