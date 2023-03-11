export default function DrawInput({ inputOb }) {
  const {
    name,
    type,
    val,
    handlers: { handleChange, controlCheck },
  } = inputOb;

  return (
    <div>
      <input
        type={type}
        id={val}
        name={name}
        value={val}
        checked={controlCheck(name, val)}
        onChange={handleChange}
      />
      <label
        htmlFor={val}
        className={
          name === "Framework"
            ? "hover:bg-sky-200 p-1 rounded m-1 text-xl w-4 h-4"
            : "hover:bg-green-200 p-1 rounded m-1 text-xl w-4 h-4"
        }
      >
        {val}
      </label>
    </div>
  );
}
