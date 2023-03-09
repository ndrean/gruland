import { create } from "zustand";

const filterData = (set) => (value, name) =>
  set((state) => {
    const updatedMap = new Map(state.filterMap).set(name.toLowerCase(), value);

    let list = [...state.initData];
    for (const [k, v] of updatedMap) {
      list = list.filter((example) => example[k] === v);
    }
    return { selectedData: list, filterMap: updatedMap };
  });

export const useZstore = create((set, get) => ({
  initData: null,
  filterMap: new Map(),
  selectedData: [],
  filterData: filterData(set),
  resetFilterMap: () => set({ filterMap: new Map() }),
  resetSelectedData: () => set({ selectedData: get().initData }),
}));
