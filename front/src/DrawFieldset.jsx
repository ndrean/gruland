import React from "react";
import DrawInput from "./DrawInput";

export default function DrawFieldset({ legend, type, names }) {
  return (
    <fieldset className="border border-solid mt-2">
      <legend className="m-2 font-bold">{legend}</legend>
      <div>
        {names.map((name, id) => (
          <DrawInput name={legend} key={id} type={type} val={name} />
        ))}
      </div>
    </fieldset>
  );
}
