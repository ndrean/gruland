import DrawInput from "./DrawInput";

export default function DrawFieldset({ legend, type, names, handlers }) {
  return (
    <fieldset className="border border-solid mt-2">
      <legend className="m-2 font-bold">{legend}</legend>
      <div className="flex flex-col items-start">
        {names.map((name, id) => {
          const inputOb = {
            name: legend,
            val: name,
            type,
            handlers,
          };
          return <DrawInput key={id} inputOb={inputOb} />;
        })}
      </div>
    </fieldset>
  );
}
