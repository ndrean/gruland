# Gruland

<https://gruland.surge.sh>

A backend to serve the statistics on AWS package from NPM is deployed on fly.io (`curl https://gruland.fly.dev/api/packages`)

## JSON files (Elixir)

1. To build the examples, fork the repo <https://github.com/aws-samples/serverless-patterns>.
   The function `Builder.run` will read all the directories and extract the "example-pattern.json" files, and concat into a new file for the front to render it.

In a terminal run:

```bash
mix deps.get
iex -S mix
```

This open an IEx session. Then run:

```elixir
iex> Builder.run
```

This creates a file "serverlessland-examples.json"

1. The NPM packages are served by a deployed app. You can `curl https://gruland.fly.dev/api/packages` or use the front-end `https://gruland.surge.sh` to get them.

The file "aws-npm-packages.json" is created if you set `true`:

```
$ iex -S mix
iex> Npm.find(true, "@aws-sdk/client", "2022-01-01", "2023-01-01")
```

or run the server:

```
mix phx.server
```

and `curl http://localhost:4000/api/packages`.

The official list of AWS NPM packages is: <https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html>

The NPM api can be found at: <https://api-docs.npms.io/> and a "search" endpint <https://api.npms.io/v2/search> (paginated per 25).

Total downloads in 2022 per package:

<img width="702" alt="Screenshot 2023-03-11 at 01 42 08" src="https://user-images.githubusercontent.com/6793008/224469567-eca61d3d-448c-4689-ac94-7acdf4f9a8ac.png">

Detail of downloads per package in 2022:

<img width="422" alt="Screenshot 2023-03-11 at 01 44 37" src="https://user-images.githubusercontent.com/6793008/224469675-a996a21a-d885-4eb8-a67b-9756ce733c45.png">

The code of AWS NPM packages can be run in a Livebook.

[![Run in Livebook](https://livebook.dev/badge/v1/blue.svg)](https://livebook.dev/run?url=https://github.com/ndrean/gruland/blob/main/livebook.livemd)

## Front

Vite generate Preact + Universal-Router + Zustand

Visible at: <https://gruland.surge.sh>
