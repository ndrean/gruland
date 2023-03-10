import UniversalRouter from "universal-router";
import { useZstore, upload, fetchPackages } from "./store";

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
        action: async () => {
          upload();
          const { default: Home } = await import("./Home");
          return <Home />;
        },
      },
      {
        path: "/npm-aws",
        action: async () => {
          // if (useZstore.getState().loadingPkg) {
          // return { redirect: "/" };
          // } else {
          fetchPackages();
          const { Packages } = await import("./Packages");
          return <Packages />;
          // }
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
