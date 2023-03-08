import { create } from "zustand";
import { selectMenu, transformMenu } from "./selectMenu";

const setData = (set) => (data) => set(() => ({ data: data }));

const modify = (selection, value, name) => {
  if (selection === null) {
    return [{ name: name, val: value }];
  } else {
    if (!selection.find((ob) => ob.name === name)) {
      return [...selection, { name: name, val: value }];
    } else {
      return selection.map((ob) =>
        ob.name === name ? { ...ob, val: value } : ob
      );
    }
  }
};

const updateSelection = (set) => (value, name) =>
  set((state) => ({
    selection: modify(state.selection, value, name.toLowerCase()),
  }));

const setSelection = (set) => (data) => set(() => ({ selection: data }));

const filter = () => (list, newSelection) => {
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
  data: null,
  setData: setData(set),
  filter: filter(set),
}));

useZstore.setState({ checkboxes: initial });
