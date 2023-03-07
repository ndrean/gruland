import UniversalRouter from "universal-router";
import { zstore } from "./store";
import { getJson, githubJson } from "./github";

async function setHome() {
  // get the examples list from Gtihub or from the store if present
  const list = zstore.getState().list || (await getJson(githubJson));
  // instanciate the store in memory
  if (zstore.getState().list === null) zstore.setState({ list: list });
  const { default: Home } = await import("./Home");
  return <Home list={list} />;
}

async function setExample(id) {
  const example = zstore.getState().list.filter((ex) => ex.id === id)[0];
  const { default: Example } = await import("./Example");
  return Example({ example });
}

const router = new UniversalRouter([
  {
    path: "",
    async action({ next }) {
      const content = await next();
      const { default: NavBar } = await import("./NavBar");
      return content && NavBar({ children: content });
    },
    children: [
      {
        path: "/",
        action: async () => setHome(),
      },
      {
        path: "/:id",
        action: async ({ params: { id } }) => setExample(id),
      },
    ],
  },
  {
    path: "(.*)",
    action: async () => import("./Error").then(({ default: Error }) => Error()),
  },
]);

export default router;
