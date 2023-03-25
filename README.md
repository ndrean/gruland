# Gruland

Accessible via: <https://gruland.surge.sh>

A backend to serve the statistics on AWS package from NPM is deployed on fly.io (`curl https://gruland.fly.dev/api/packages?p="@grucloud"`)

```bash
> fly deploy
```

## JSON files (Elixir)

1/ To build the examples,

- fork the repo <https://github.com/aws-samples/serverless-patterns>.
- open an IEx session and run `Builder.run`. It will read all the directories and extract the "example-pattern.json" files, and concat into a new file for the front to render it.

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

2/ The NPM packages are served by a deployed app. You can `curl https://gruland.fly.dev/api/packages?p="mypackage"` or use the front-end `https://gruland.surge.sh` to get them.

The file "aws-npm-packages.json" is created if you set `true`. This can only be done in the terminal locally where you can also set "starting" and "ending" query period.

```elixir
$ iex -S mix
iex> Npm.find(true, "@aws-sdk/client", "2022-01-01", "2023-01-01")
```

3/ Sources:
The official list of AWS NPM packages is: <https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html>

The NPM api can be found at: <https://api-docs.npms.io/> and a "search" endpint <https://api.npms.io/v2/search> (paginated per 25).

4/ Results for AWS JS packages in 2022:

Total downloads in 2022 per package:

<img width="702" alt="Screenshot 2023-03-11 at 01 42 08" src="https://user-images.githubusercontent.com/6793008/224469567-eca61d3d-448c-4689-ac94-7acdf4f9a8ac.png">

Detail of downloads per package in 2022:

<img width="422" alt="Screenshot 2023-03-11 at 01 44 37" src="https://user-images.githubusercontent.com/6793008/224469675-a996a21a-d885-4eb8-a67b-9756ce733c45.png">

The code of AWS NPM packages can be run in a Livebook.

[![Run in Livebook](https://livebook.dev/badge/v1/blue.svg)](https://livebook.dev/run?url=https://github.com/ndrean/gruland/blob/main/livebook.livemd)

## Front

Vite generate Preact + Universal-Router + Zustand

Package.json:

```json
"dependencies": {
    "history": "^5.3.0",
    "preact": "^10.11.3",
    "universal-router": "^9.1.0",
    "zustand": "^4.3.6"
  },
```

Erase "React" in the "node_modules".

Visible at: <https://gruland.surge.sh>
