import { createStore } from "zustand/vanilla";
import { create } from "zustand";
import { selectMenu, transformMenu } from "./selectMenu";

// setup outside React for UniversalRouter
export const zstore = createStore(() => ({
  list: null,
}));

const modify = (state, value, name) => {
  if (state === null) {
    return [{ name: name, val: value }];
  } else {
    if (!state.find((ob) => ob.name === name)) {
      return [...state, { name: name, val: value }];
    } else {
      return state.map((ob) => (ob.name === name ? { ...ob, val: value } : ob));
    }
  }
};

const setData = (set) => (data) => set(() => ({ data: data }));

const updateSelection = (set) => (selection, value, name) =>
  set(() => ({ selection: modify(selection, value, name.toLowerCase()) }));

const setSelection = (set) => (data) => set(() => ({ selection: data }));

const filter = (set) => (list, newSelection) => {
  return newSelection === null
    ? list
    : newSelection.reduce(
        (acc, curr) => acc.filter((ex) => ex[curr.name] === curr.val),
        list
      );
};

export const initial = transformMenu(selectMenu);
const updateCheckboxes = (set) => (value, name) => {
  set((state) => {
    const bool = state.checkboxes[name][value];
    const newObj = { [name]: { ...initial[name], [value]: !bool } };
    return { ...state.checkboxes, newObj };
  });
};

const setCheckboxes = (set) => (data) => set(() => ({ checkboxes: data }));

export const useZstore = create((set) => ({
  selection: null,
  setSelection: setSelection(set),
  updateSelection: updateSelection(set),
  checkboxes: {},
  setCheckboxes: setCheckboxes(set),
  updateCheckboxes: updateCheckboxes(set),
  data: [],
  setData: setData(set),
  filter: filter(set),
}));
