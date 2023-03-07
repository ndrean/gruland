import { createStore } from "zustand/vanilla";
import { create } from "zustand";

export const zstore = createStore(() => ({
  list: null,
  selection: null,
}));

export const useZstore = create((set) => ({
  selection: null,
  setSelection: (selection) => set(() => ({ selection: selection })),
}));
