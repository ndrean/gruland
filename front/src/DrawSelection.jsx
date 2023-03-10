import DrawFieldset from "./DrawFieldset";
import { selectMenu } from "./selectMenu";

export default function DrawSelection({ handlers }) {
  return (
    <div className="overflow-y-auto">
      {selectMenu.map(({ legend, type, names }, idx) => (
        <DrawFieldset
          legend={legend}
          type={type}
          names={names}
          key={idx}
          handlers={handlers}
        />
      ))}
    </div>
  );
}
