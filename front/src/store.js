import { create } from "zustand";

const filterData = (set) => (value, name) =>
  set((state) => {
    let updatedMap = new Map(state.filterStore);
    updatedMap = updatedMap.set(name.toLowerCase(), value);

    let list = state.initData;
    for (const [k, v] of updatedMap) {
      list = list.filter((example) => example[k] === v);
    }
    return { selectedData: list, filterStore: updatedMap };
  });

const initSelectedData = (set) => (data) => set(() => ({ selectedData: data }));

export const useZstore = create((set) => ({
  filterStore: null,
  filterData: filterData(set),
  initSelectedData: initSelectedData(set),
  selectedData: null,
  initData: null,
}));
