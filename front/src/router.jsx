import UniversalRouter from "universal-router";
import { useZstore } from "./store";
import { getJson, githubJson } from "./github";

async function createHome() {
  const list = useZstore.getState().initData || (await getJson(githubJson));
  if (useZstore.getState().initData === null) {
    useZstore.setState({ initData: list, selectedData: list });
  }
  const { default: Home } = await import("./Home");
  return <Home list={list} />;
}

async function setExample(id) {
  const example = useZstore
    .getState()
    .selectedData.filter((ex) => ex.id === id)[0];
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
