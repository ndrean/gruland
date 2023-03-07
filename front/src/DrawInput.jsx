import React from "react";
import { useZstore } from "./store";

export default function DrawInput({ name, type, val, isChecked }) {
  const updateSelection = useZstore((state) => state.updateSelection);
  const selection = useZstore((state) => state.selection);
  console.log(selection);

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
          checked={isChecked(val)}
          onChange={(e) =>
            updateSelection(
              selection,
              e.target.val,
              e.target.name,
              e.target.type
            )
          }
        />
      </label>
    </div>
  );
}
