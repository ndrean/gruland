import history from "./history";
import Reset from "./Reset";
import Loader from "./Loader";
import DrawSelection from "./DrawSelection";
import DrawCards from "./DrawCards";
import { useZstore } from "./store";
import "./index.css";

export default function Home() {
  const examples = useZstore((state) => state.selectedData);
  const enabled = useZstore((state) => state.enabled);
  const resetZstore = useZstore((state) => state.resetZstore);
  const filterData = useZstore((state) => state.filterData);
  const selectionMap = useZstore((state) => state.filterMap);
  const loader = useZstore((state) => state.loader);

  function handleReset() {
    resetZstore();
  }

  function handleClick(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }

  function handleChange({ target: { name, value } }) {
    return filterData(value, name);
  }

  const controlCheck = (name, value) =>
    selectionMap.get(name.toLowerCase()) === value ? true : false;

  return (
    <div class="flex h-full">
      <div className="flex flex-col  px-2 py-8 w-72">
        <Reset handleReset={handleReset} />
        <p>Filters: ({examples && examples.length} template(s))</p>
        <hr />
        <DrawSelection handlers={{ handleChange, controlCheck, enabled }} />
      </div>
      <main className="  flex-wrap w-full  bg-white h-auto overflow-y-auto mb-14">
        {loader ? (
          <Loader />
        ) : (
          examples &&
          examples.map((example) => (
            <DrawCards
              example={example}
              index={example.id}
              handleClick={handleClick}
            />
          ))
        )}
      </main>
    </div>
  );
}
