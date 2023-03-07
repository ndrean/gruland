import React from "react";

export default function DrawInput({ name, type, val, handleBox, isChecked }) {
  return (
    <div>
      <label htmlFor={val} className="hover:bg-sky-200 p-1 rounded m-1">
        {val}
        <input
          type={type}
          id={val}
          name={name}
          value={val}
          checked={isChecked(val)}
          onChange={handleBox}
        />
      </label>
    </div>
  );
}
