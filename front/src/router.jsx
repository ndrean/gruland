import UniversalRouter from "universal-router";
import { useZstore } from "./store";
import { getJson, githubJson } from "./github";

async function createHome() {
  const list = useZstore.getState().initData || (await getJson(githubJson));
  if (useZstore.getState().initData === null) {
    useZstore.setState({ initData: list, selectedData: list });
  }
  const { default: Home } = await import("./Home");
  return <Home />;
}

async function setExample(id) {
  const data = useZstore.getState().selectedData;
  const example = data.filter((ex) => ex.id === id)[0];
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
