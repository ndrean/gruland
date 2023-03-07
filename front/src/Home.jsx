import React, { useState } from "react";
import history from "./history";
import "./index.css";
import DrawSelection from "./DrawSelection";
import { zstore } from "./store";
import selectMenu from "./selectMenu";

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

function filter(list, new_selection) {
  if (new_selection === null) {
    return list;
  } else {
    return new_selection.reduce(
      (acc, curr) => acc.filter((ex) => ex[curr.name] === curr.val),
      list
    );
  }
}

function objectOfNames(menu) {
  return menu
    .map((m) =>
      Object.fromEntries([
        [
          m.legend,
          m.names.reduce((acc, curr) => {
            acc[curr] = false;
            return acc;
          }, {}),
        ],
      ])
    )
    .reduce((acc, curr) => Object.assign(acc, curr), {});
}

export default function Home({ list }) {
  const [_, setSelections] = useState(null);
  const initial = objectOfNames(selectMenu);
  const [checkObject, setCheckObject] = useState(initial);

  function handleClick(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }

  function handleSelections(e) {
    const n = e.target.name.toLowerCase();
    const v = e.target.value;

    // update the state
    setSelections((sel) => {
      if (sel === null) {
        return [{ name: n, val: v }];
      } else if (!sel.find((ob) => ob.name === n)) {
        return [...sel, { name: n, val: v }];
      } else {
        return sel.map((ob) => (ob.name === n ? { ...ob, val: v } : ob));
      }
    });

    // update the store
    updateZstore(n, v);
  }

  function isChecked(val) {
    if (checkObject[val] === true) return val;
  }

  function handleBox(e) {
    const val = e.currentTarget.value;
    const name = e.currentTarget.name;
    const bool = e.currentTarget.checked;

    const newObj = Object.assign(
      initial[name],
      Object.fromEntries([[val, bool]])
    );

    return setCheckObject(Object.assign(checkObject, newObj));
  }

  function handleReset() {
    console.log("reset");
    setSelections(null);
    zstore.setState({ selection: null });
    setCheckObject(initial);
  }

  // multi-criteria filtering by reducing the array of filters on the list
  const new_selection = zstore.getState().selection;
  const data = filter(list, new_selection);

  return (
    <div className="grid grid-cols-6  gap-2">
      <div className="border-2 ml-2 text-center col-span-2">
        <p> Filters: {data.length}</p>
        <button
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
