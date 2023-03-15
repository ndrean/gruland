import { create } from "zustand";
import { getJson, githubJson } from "./github";

const filterData = (set) => (value, name) =>
  set((state) => {
    const updatedMap = new Map(state.filterMap).set(name.toLowerCase(), value);

    let list = [...state.initData];
    for (const [k, v] of updatedMap) {
      list = list.filter((example) => example[k] === v);
    }
    return { selectedData: list, filterMap: updatedMap };
  });

export async function upload() {
  if (useZstore.getState().initData === null) {
    const list = await getJson(githubJson);
    useZstore.setState({ initData: list, selectedData: list, loader: false });
  }
}

export const useZstore = create((set, get) => ({
  initData: null,
  filterMap: new Map(),
  selectedData: [],
  filterData: filterData(set),
  resetZstore: () =>
    set({ filterMap: new Map(), selectedData: get().initData }),
  loader: true,
  loadingPkg: false,
  packages: null,
  disabled: false,
  searched_package: "@grucloud",
}));

export async function fetchPackages(pkg) {
  const host = "https://gruland.fly.dev/api/packages?";
  const local = "http://localhost:4000/api/packages?";

  useZstore.setState({ loadingPkg: true });
  useZstore.setState({ disabled: true });
  let packages = useZstore.getState().packages;
  if (!packages) {
    try {
      const response = await fetch(host + new URLSearchParams({ p: pkg }), {
        mode: "cors",
      });

      if (response) {
        packages = await response.json();
        useZstore.setState({ packages: packages });
      }
    } catch (error) {
      console.log(error);
      window.alert("Error");
    }
  }
  useZstore.setState({ loadingPkg: false });
  useZstore.setState({ disabled: false });
  return packages;
}
