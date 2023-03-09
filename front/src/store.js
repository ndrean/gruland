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

const resetFilterMap = (set) => () =>
  set(() => ({
    filterMap: new Map(),
  }));

const resetSelectedData = (set) => () =>
  set((state) => ({ selectedData: state.initData }));

export const useZstore = create((set) => ({
  initData: null,
  filterMap: new Map(),
  resetFilterMap: resetFilterMap(set),
  resetSelectedData: resetSelectedData(set),
  selectedData: null,
  filterData: filterData(set),
}));
