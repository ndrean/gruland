import React from "react";

export default function DrawInput({ name, type, val }) {
  return (
    <div>
      <label htmlFor={val}>
        {val}
        <input type={type} id={val} name={name} value={val} />
      </label>
    </div>
  );
}
