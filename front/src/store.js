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
}));
