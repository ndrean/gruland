import history from "./history";
import DrawSelection from "./DrawSelection";
import { useZstore } from "./store";
import "./index.css";

export default function Home() {
  let examples = useZstore((state) => state.selectedData);
  const resetZstore = useZstore((state) => state.resetZstore);

  function handleReset() {
    resetZstore();
  }

  function handleClick(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }

  return (
    <div className="grid grid-cols-6  gap-2">
      <div className="border-2 ml-2 text-center col-span-2">
        <button
          type="reset"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
        <p>Filter: {examples.length}</p>
        <hr />
        <DrawSelection />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 col-span-4 gap-2">
        {examples &&
          examples.map((example, index) => (
            <div className="flex justify-center mb-5" key={index}>
              <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  <a href={`/${example.id}`} onClick={handleClick}>
                    {example.title}
                  </a>
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {example.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
