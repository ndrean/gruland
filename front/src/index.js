import React from "react";
import { createRoot } from "react-dom/client";
import history from "./history";
import router from "./router";
import "./index.css";

const root = createRoot(document.getElementById("root"));

// "history" returns a path, and "router" finds a match in the routes array
async function renderRoute(location) {
  try {
    const page = await router.resolve({
      pathname: location.pathname,
    });

    return root.render(<React.StrictMode>{page}</React.StrictMode>);
  } catch (err) {
    console.log(err);
    return root.render(<p>Wrong!</p>);
  }
}

///////////////////////////////
// Listen for changes to the current location.
history.listen(({ location }) => renderRoute(location));
// set initial url at "/"
history.push("/");
