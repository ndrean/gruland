import React from "react";

export default function DrawInput({ name, type, val, handleBox, isChecked }) {
  // function handleChange(e) {
  //   console.log(checkObject[val], val);
  //   return (checkObject[val] = !e.target.checked);
  // }

  return (
    <div>
      <label htmlFor={val}>
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
