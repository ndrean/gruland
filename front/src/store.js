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
}));

export async function fetchPackages() {
  useZstore.setState({ loadingPkg: true });

  let packages = useZstore.getState().packages;
  if (!packages) {
    const response = await fetch("http://localhost:4000/" + "api/packages");
    packages = await response.json();
  }
  useZstore.setState({ packages: packages });
  useZstore.setState({ loadingPkg: false });
  return packages;
}
