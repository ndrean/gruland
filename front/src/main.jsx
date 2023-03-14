import { render } from "preact";
import history from "./history";
import router from "./router";
import "./index.css";

const root = document.getElementById("app");
async function renderRoute(location) {
  try {
    const page = await router.resolve({
      pathname: location.pathname,
    });

    // console.log("page redirect main", Object.keys(page));
    // if (page.redirect) {
    // history.push("/");
    // } else {
    return render(<>{page}</>, root);
  } catch (err) {
    console.log(err);
    return render(<p>Wrong!</p>), root;
  }
}

history.listen(({ location }) => renderRoute(location));
history.push("/");
