import history from "./history";
import Reset from "./Reset";
import Loader from "./Loader";
import DrawSelection from "./DrawSelection";
import { useZstore } from "./store";
import "./index.css";
import DrawCards from "./DrawCards";

export default function Home() {
  const examples = useZstore((state) => state.selectedData);
  const resetZstore = useZstore((state) => state.resetZstore);
  const filterData = useZstore((state) => state.filterData);
  const selectionMap = useZstore((state) => state.filterMap);
  const loader = useZstore((state) => state.loader);

  useZstore((state) => state.upload)();
  console.log(loader);

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

  const controlCheck = (name, value) => {
    return selectionMap.get(name.toLowerCase()) === value ? true : false;
  };

  return (
    <div className="grid grid-cols-6  gap-2">
      <div className="border-2 ml-2 text-center col-span-2">
        <Reset handleReset={handleReset} />
        <p>Filter: {examples && examples.length}</p>
        <hr />
        <DrawSelection handlers={{ handleChange, controlCheck }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 col-span-4 gap-2">
        {loader ? (
          <Loader />
        ) : (
          examples.map((example, index) => (
            <DrawCards
              example={example}
              index={index}
              handleClick={handleClick}
            />
          ))
        )}
      </div>
    </div>
  );
}
