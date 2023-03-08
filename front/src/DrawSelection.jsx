import React from "react";
import DrawFieldset from "./DrawFieldset";
import { selectMenu } from "./selectMenu";

export default function DrawSelection({ onhandleSelections, handleBox }) {
  return (
    <div onChange={onhandleSelections}>
      {selectMenu.map(({ legend, type, names }, idx) => (
        <DrawFieldset
          legend={legend}
          type={type}
          names={names}
          key={idx}
          handleBox={handleBox}
        />
      ))}
      )
    </div>
  );
}
