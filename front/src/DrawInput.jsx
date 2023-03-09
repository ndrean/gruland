import { useZstore } from "./store";

const controlCheck = (name, val) => {
  const selection = useZstore.getState().filterMap;
  return selection.get(name.toLowerCase()) === val ? true : false;
};

export default function DrawInput({ name, type, val }) {
  const filterData = useZstore((state) => state.filterData);
  const checked = controlCheck(name, val);

  const handleChange = () => filterData(val, name);

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
