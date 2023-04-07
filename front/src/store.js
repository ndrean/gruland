import { create } from "zustand";
import history from "./history";
import debounce from "lodash.debounce";
import { getJson, githubJson } from "./github";
import resources from "./resources";

function reduceList(list, key) {
  return [
    ...new Set(
      list.reduce((acc, curr) => {
        if (curr[key] === undefined) return [...acc];
        return [...acc, curr[key].toLowerCase()];
      }, [])
    ),
  ];
}
/** store for selecting serverlessland examples ******/
const filterData = (set) => (value, name) =>
  set((state) => {
    const updatedMap = new Map(state.filterMap).set(name.toLowerCase(), value);
    let enabled = [];
    let list = [...state.initData];
    for (const [k, v] of updatedMap) {
      list = list.filter((example) => example[k] === v);
      let key = "framework";
      if (k === "framework") key = "language";
      enabled = reduceList(list, key);
    }

    return { selectedData: list, filterMap: updatedMap, enabled: enabled };
  });

const initEnabled = (list) => {
  return list.reduce((acc, curr) => {
    if (
      curr.language === undefined ||
      curr.framework === undefined ||
      curr.language === "" ||
      curr.language === "n/a" ||
      curr.framework === "n/a" ||
      curr.framework === ""
    )
      return acc;
    const res = [
      ...acc,
      curr.language.toLowerCase(),
      curr.framework.toLowerCase(),
    ];
    return [...new Set(res)];
  }, []);
};

export const useZstore = create((set, get) => ({
  initData: null,
  initEnabled: null,
  enabled: [],
  filterMap: new Map(),
  selectedData: [],
  filterData: filterData(set),
  resetZstore: () =>
    set({
      filterMap: new Map(),
      selectedData: get().initData,
      enabled: get().initEnabled,
    }),
  loader: true,
  loadingPkg: false,
  packages: null,
  disabled: false,
  searched_package: "@grucloud",
}));

export async function upload() {
  if (useZstore.getState().initData === null) {
    const list = await getJson(githubJson);
    const initEnable = initEnabled(list);
    return useZstore.setState({
      initData: list,
      selectedData: list,
      loader: false,
      enabled: initEnable,
      initEnabled: initEnable,
    });
  }
}
/** Search Packages *****************************/

export async function searchPackages(pkg) {
  const host = "https://gruland.fly.dev/api/packages?";
  const local = "http://localhost:4000/api/packages?";

  useZstore.setState({ loadingPkg: true });
  useZstore.setState({ disabled: true });
  let packages = useZstore.getState().packages;
  if (!packages) {
    try {
      const response = await fetch(host + new URLSearchParams({ p: pkg }), {
        mode: "cors",
      });
      if (response) {
        packages = await response.json();

        useZstore.setState({ packages: packages });
      }
    } catch (error) {
      window.alert("Error, try again!");
      history.push("/");
    } finally {
      useZstore.setState({ loadingPkg: false });
      useZstore.setState({ disabled: false });
      return packages;
    }
  }
}

/** Resource filtering store ***************************/

const filterResources = (set) =>
  debounce(
    (query) =>
      set((state) => {
        const filtered = state.resources.filter(
          (resource) =>
            resource.type.toLowerCase().includes(query.toLowerCase()) ||
            resource.group.toLowerCase().includes(query.toLowerCase())
        );
        return { filteredResources: filtered };
      }),
    500
  );

export const useResource = create((set, get) => ({
  filteredResources: resources,
  filterResources: filterResources(set),
  resetResources: () => set(() => ({ filteredResources: resources })),
}));
