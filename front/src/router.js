import UniversalRouter from "universal-router";
import { useZstore } from "./store";
import { getJson, githubJson } from "./github";

async function createHome() {
  // get the examples list from Gtihub or from the store if present
  const list = useZstore.getState().data || (await getJson(githubJson));
  // instanciate the store in memory
  if (useZstore.getState().data === null) useZstore.setState({ data: list });
  const { default: Home } = await import("./Home");
  return <Home list={list} />;
}

async function setExample(id) {
  const example = useZstore.getState().data.filter((ex) => ex.id === id)[0];
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
        action: async () => createHome(),
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
