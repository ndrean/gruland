import { createStore } from "zustand/vanilla";

export const zstore = createStore(() => ({
  list: null,
  selection: null,
}));
