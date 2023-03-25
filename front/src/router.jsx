import UniversalRouter from "universal-router";
import { useZstore, upload, useResource } from "./store";
import resources from "./resources.js";

async function setExample(id) {
  const data = useZstore.getState().selectedData;
  const example = data.filter((ex) => ex.id === id)[0];
  const { default: Example } = await import("./Example");
  return Example({ example });
}

function setResources() {
  useResource.setState({ resources });
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
        action: async () => {
          upload();
          const { default: Home } = await import("./Home");
          return <Home />;
        },
      },
      {
        path: "/npm-aws",
        action: async () => {
          const { Packages } = await import("./Packages");
          return <Packages />;
        },
      },
      {
        path: "/resources",
        action: async () => {
          setResources();
          const { Resource } = await import("./Resource");
          return <Resource />;
        },
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
