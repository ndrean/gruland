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

[![Run in Livebook](https://livebook.dev/badge/v1/blue.svg)](https://livebook.dev/run?url=http%3A%2F%2Flocalhost%3A58241%2Fsessions%2Fl5nhjtyaipg7lu45l2ad3wykvj5jzyf5nl6dbhwb)

## Front

Vite generate Preact + Universal-Router + Zustand

```js
npm i
```
