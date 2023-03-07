import React, { useState } from "react";
import history from "./history";
import DrawSelection from "./DrawSelection";
import { zstore } from "./store";
import { selectMenu, transformMenu } from "./selectMenu";
import "./index.css";

function updateZstore(n, v) {
  const curr = zstore.getState().selection;
  if (curr === null) {
    zstore.setState({ selection: [{ name: n, val: v }] });
  } else if (!curr.find((ob) => ob.name === n)) {
    zstore.setState({ selection: [...curr, { name: n, val: v }] });
  } else {
    zstore.setState({
      selection: curr.map((ob) => (ob.name === n ? { ...ob, val: v } : ob)),
    });
  }
}

function filter(list, newSelection) {
  if (newSelection === null) {
    return list;
  } else {
    return newSelection.reduce(
      (acc, curr) => acc.filter((ex) => ex[curr.name] === curr.val),
      list
    );
  }
}

export default function Home({ list }) {
  const [selections, setSelections] = useState(null);
  const [data, setData] = useState(list);

  const initial = transformMenu(selectMenu);
  const [checkObject, setCheckObject] = useState(initial);

  function handleClick(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }

  function handleSelections({ target: { name, value } }) {
    const key = name.toLowerCase();

    // update the state
    setSelections((selection) => {
      if (selection === null) {
        return [{ name: key, val: value }];
      } else if (!selection.find((ob) => ob.name === key)) {
        return [...selection, { name: key, val: value }];
      } else {
        return selection.map((ob) =>
          ob.name === key ? { ...ob, val: value } : ob
        );
      }
    });

    // update the store
    updateZstore(key, value);
  }

  function isChecked(value) {
    if (checkObject[value] === true) return value;
  }

  function handleBox({ target: { value, name, checked: bool } }) {
    const newSubObj = Object.assign(
      initial[name],
      Object.fromEntries([[value, bool]])
    );
    const newObj = Object.fromEntries([[name, newSubObj]]);
    return setCheckObject(Object.assign(checkObject, newObj));
  }

  function handleReset() {
    setSelections(null);
    zstore.setState({ selection: null });
    setCheckObject(initial);
  }

  // observer on the zstore.selection
  const newSelection = zstore.getState().selection;

  React.useEffect(() => {
    return setData(() => filter(list, newSelection));
  }, [selections, list, newSelection]);

  return (
    <div className="grid grid-cols-6  gap-2">
      <div className="border-2 ml-2 text-center col-span-2">
        <p> Filters: {data.length}</p>
        <form>
          <button
            type="reset"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
          <hr />
          <DrawSelection
            onhandleSelections={handleSelections}
            isChecked={isChecked}
            handleBox={handleBox}
          />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 col-span-4 gap-2">
        {data.map((example, index) => (
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
