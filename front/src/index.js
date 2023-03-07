// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

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
// set initial url at "/"
history.push("/");
// Listen for changes to the current location.
history.listen(({ location }) => renderRoute(location));
renderRoute(history.location);
