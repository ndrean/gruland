import UniversalRouter from "universal-router";
import vstore from "./github";

const context = { state: vstore };

const routes = [
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
          const { default: Home } = await import("./Home");
          return Home();
        },
      },
      {
        path: "/:example",
        action: async (context) => `<p>Test</p>`,
      },
    ],
  },
];

export default new UniversalRouter(routes, { context });
