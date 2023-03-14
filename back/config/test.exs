import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :back, BackWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "3Dp6KDRllI4PDtGvL4siwvNEM2/+3kbyHCz47UlPrK7j2dHkHr0rvCxgHxwxs1xE",
  server: false

# Print only warnings and errors during test
config :logger, level: :warning

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
