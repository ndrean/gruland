import React, { useState } from "react";
import history from "./history";
import "./index.css";
import DrawSelection from "./DrawSelection";
import { zstore } from "./store";

export default function Home({ list }) {
  // console.log(list.slice(0, 2));
  const [_, setSelections] = useState(null);

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

  //   remove all radio buttons
  function clearRadioButtons() {
    var ele = document.querySelectorAll("input[type=radio]");
    for (var i = 0; i < ele.length; i++) {
      ele[i].checked = false;
    }
  }

  function handleReset() {
    setSelections(null);
    zstore.setState({ selection: null });
    clearRadioButtons();
  }

  const new_selection = zstore.getState().selection;

  // multi-criteria filtering by reducing the array of filters on the list
  let data = [];
  if (new_selection === null) {
    data = list;
  } else {
    new_selection.reduce((acc, curr) => {
      return (data = acc.filter((ex) => ex[curr.name] === curr.val));
    }, list);
  }

  //   console.log(data);s
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
        <DrawSelection onhandleSelections={handleSelections} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 col-span-4 gap-2">
        {/* <p>{JSON.stringify(data.slice(0, 2))}</p> */}
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
