import history from "./history";
import Reset from "./Reset";
import Loader from "./Loader";
import DrawSelection from "./DrawSelection";
import DrawCards from "./DrawCards";
import { useZstore } from "./store";
import "./index.css";

export default function Home() {
  const examples = useZstore((state) => state.selectedData);
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

  console.log(examples);
  return (
    <div class="flex h-full">
      <div className="flex w-72 h-full">
        <div className="w-full flex flex-col mx-auto px-6 py-8">
          <Reset handleReset={handleReset} />
          <p>Filters: ({examples && examples.length} template(s))</p>
          <hr />
          <DrawSelection handlers={{ handleChange, controlCheck }} />
        </div>
      </div>
      <main className="flex flex-wrap justify-around w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
        {loader ? (
          <Loader />
        ) : (
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
