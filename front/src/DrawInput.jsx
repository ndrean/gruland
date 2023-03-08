import { useZstore } from "./store";

export default function DrawInput({ name, type, val }) {
  const filterData = useZstore((state) => state.filterData);

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
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
