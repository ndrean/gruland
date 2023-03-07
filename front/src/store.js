import { createStore } from "zustand/vanilla";
import { create } from "zustand";
import { selectMenu, transformMenu } from "./selectMenu";

export const zstore = createStore(() => ({
  list: null,
}));

// const ok = (current, name, value) => {
//   if (current === null) {
//     return { selection: [{ name: name, val: v }] };
//   } else {
//     if (!current.find((ob) => ob.name === name)) {
//       return { selection: [...current, { name: name, val: value }] };
//     } else {
//       return {
//         selection: current.map((ob) =>
//           ob.name === name ? { ...ob, val: value } : ob
//         ),
//       };
//     }
//   }
// };

const modify = (state, value, name, type) => {
  console.log(state);
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

const initial = transformMenu(selectMenu);

const setData = (set) => (data) => set(() => ({ data: data }));

const updateSelection = (set) => (selection, value, name, type) =>
  set(() => ({ selection: modify(selection, value, name, type) }));

const setSelection = (set) => (data) => set(() => ({ selection: data }));

const filter = (set) => (list, newSelection) =>
  newSelection === null
    ? list
    : newSelection.reduce(
        (acc, curr) => acc.filter((ex) => ex[curr.name] === curr.val),
        list
      );

const updateCheckboxes = (set) => (value, name, checked) =>
  set((state) => {
    const newObj = { [name]: { ...initial[name], [value]: checked } };
    return { ...state, newObj };
  });

export const useZstore = create((set) => ({
  selection: null,
  setSelection: setSelection(set),
  updateSelection: updateSelection(set),
  checkboxes: {},
  updateCheckboxes: updateCheckboxes(set),
  data: [],
  setData: setData(set),
  getFiltered: filter(set),
}));
