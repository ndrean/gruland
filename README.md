# Gruland

## JSON files (Elixir)

In a terminal run:

```bash
mix deps.get
iex -S mix
```

This open an IEx session. Then run:

```elixir
iex> Builder.run
iex> Npm.find("@aws-sdk/client", "2022-01-01", "2023-01-01")
```

Two files are created: "aws-npm-packages.json" and "serverlessland-examples.json"

[![Run in Livebook](https://livebook.dev/badge/v1/blue.svg)](https://livebook.dev/run?url=https://github.com/ndrean/gruland/blob/main/livebook.livemd)

## Front

Vite generate Preact + Universal-Router + Zustand

```js
npm i
```
