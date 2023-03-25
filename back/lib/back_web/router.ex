defmodule BackWeb.Router do
  use BackWeb, :router

  pipeline :api do
    plug(Corsica,
      origins: ["http://localhost:5173", "http://localhost:5174", "https://gruland.surge.sh"]
    )

    plug(:accepts, ["json"])
  end

  scope "/api", BackWeb do
    pipe_through(:api)

    get("/packages", PackagesController, :index, params: "p")
  end

  # Enable LiveDashboard in development
  if Application.compile_env(:back, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through([:fetch_session, :protect_from_forgery])

      live_dashboard("/dashboard", metrics: BackWeb.Telemetry)
    end
  end
end
