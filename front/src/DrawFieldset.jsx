import React from "react";
import DrawInput from "./DrawInput";

export default function DrawFieldset({
  legend,
  type,
  names,
  isChecked,
  handleBox,
}) {
  return (
    <fieldset className="border border-solid mt-2">
      <legend className="m-2 font-bold">{legend}</legend>
      <div>
        {names.map((name, id) => (
          <DrawInput
            name={legend}
            key={id}
            type={type}
            val={name}
            isChecked={isChecked}
            handleBox={handleBox}
          />
        ))}
      </div>
    </fieldset>
  );
}
