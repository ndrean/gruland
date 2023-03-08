import React from "react";

export default function DrawInput({ name, type, val, handleBox, isChecked }) {
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
          onChange={handleBox}
        />
      </label>
    </div>
  );
}
