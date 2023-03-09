import { useZstore } from "./store";

function controlCheck(name, val) {
  const selection = useZstore.getState().filterStore;
  let checked;
  if (selection) {
    selection.get(name.toLowerCase()) === val
      ? (checked = true)
      : (checked = false);
  } else {
    checked = false;
  }
  return checked;
}

export default function DrawInput({ name, type, val }) {
  const filterData = useZstore((state) => state.filterData);
  const checked = controlCheck(name, val);

  const handleChange = () => {
    filterData(val, name);
  };

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
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
