import { create } from "zustand";

const filterData = (set) => (value, name) =>
  set((state) => {
    const updatedMap = new Map(state.filterStore).set(
      name.toLowerCase(),
      value
    );

    let list = [...state.initData];
    for (const [k, v] of updatedMap) {
      list = list.filter((example) => example[k] === v);
    }
    return { selectedData: list, filterStore: updatedMap };
  });

export const useZstore = create((set) => ({
  initData: null,
  filterStore: null,
  selectedData: null,
  filterData: filterData(set),
}));
