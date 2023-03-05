import React from "react";
import { createRoot } from "react-dom/client";
import history from "./history";
import "./index.css";
import router from "./routes";

const root = createRoot(document.getElementById("root"));

async function renderRoute(location) {
  try {
    // "history" returns a path, and "router" finds a match in the routes array
    const page = await router.resolve({
      pathname: location.pathname,
    });

    return root.render(<>{page}</>);
  } catch (err) {
    console.log(err);
    return root.render(<p>Wrong!</p>);
  }
}

history.push("/");

history.listen(({ location }) => renderRoute(location));
renderRoute(history.location);
