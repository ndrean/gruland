import React from "react";
import DrawFieldset from "./DrawFieldset";
import { selectMenu } from "./selectMenu";

export default function DrawSelection({ isChecked, handleBox }) {
  return (
    <div>
      {selectMenu.map(({ legend, type, names }, idx) => (
        <DrawFieldset
          legend={legend}
          type={type}
          names={names}
          key={idx}
          isChecked={isChecked}
          handleBox={handleBox}
        />
      ))}
    </div>
  );
}
