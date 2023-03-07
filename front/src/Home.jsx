import React, { useState } from "react";
import history from "./history";
import DrawSelection from "./DrawSelection";
import { useZstore } from "./store";
// import { selectMenu, transformMenu } from "./selectMenu";
import "./index.css";

// function filter(list, newSelection) {
//   return newSelection === null
//     ? list
//     : newSelection.reduce(
//         (acc, curr) => acc.filter((ex) => ex[curr.name] === curr.val),
//         list
//       );
// }

export default function Home({ list }) {
  useZstore((state) => state.setData)(list);
  const examples = useZstore((state) => state.data);

  // const initial = transformMenu(selectMenu);
  // useZstore((state) => state.setCheckboxes)(initial);
  // console.log(useZstore((state) => state.checkboxes));
  // const [checkObject, setCheckObject] = useState(initial);

  function handleClick(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }

  // function handleSelections({ target: { name, value } }) {
  //   const key = name.toLowerCase();

  //   // update the store
  //   useZstore(state => state.updateSelection())
  // }

  function isChecked(value) {
    // if (checkObject[value] === true) return value;
  }

  // function handleBox({ target: { value, name, checked: bool } }) {
  //   const newObj = { [name]: { ...initial[name], [value]: bool } };
  //   return setCheckObject(Object.assign(checkObject, newObj));
  // }

  function handleReset() {
    // setSelections(null);
    // setCheckObject(initial);
  }

  return (
    <div className="grid grid-cols-6  gap-2">
      <div className="border-2 ml-2 text-center col-span-2">
        <p> Filters: {examples?.length}</p>
        <form>
          <button
            type="reset"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
          <hr />
          <DrawSelection isChecked={isChecked} />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 col-span-4 gap-2">
        {examples &&
          examples?.map((example, index) => (
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
