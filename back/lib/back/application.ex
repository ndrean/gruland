defmodule Back.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      BackWeb.Telemetry,
      {Phoenix.PubSub, name: Back.PubSub},
      {Finch, name: Back.Finch},
      {Task.Supervisor, name: TSupervisor},
      # Start the Endpoint (http/https)
      BackWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Back.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    BackWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
