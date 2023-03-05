defmodule Builder.MixProject do
  use Mix.Project

  def project do
    [
      app: :builder,
      version: "0.1.0",
      elixir: "~> 1.14",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger],
      mod: {Builder.Application, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      # {:jason, "~> 1.4"},
      {:poison, "~> 5.0"},
      {:uuid, "~> 1.1"}
    ]
  end
end
