import React from "react";
import { useZstore } from "./store";

export default function DrawInput({ name, type, val }) {
  const updateSelection = useZstore((state) => state.updateSelection);
  const updateCheckboxes = useZstore((state) => state.updateCheckboxes);
  const selection = useZstore((state) => state.selection);

  const handleChange = () => {
    updateCheckboxes(val, name);
    updateSelection(selection, val, name);
    // }
  };
  return (
    <div>
      <label
        htmlFor={val}
        className={
          name === "Framework"
            ? "hover:bg-sky-200 p-1 rounded m-1"
            : "hover:bg-green-200 p-1 rounded m-1"
        }
      >
        {val}
        <input
          type={type}
          id={val}
          name={name}
          value={val}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
