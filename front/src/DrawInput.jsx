export default function DrawInput({ inputOb }) {
  const {
    name,
    type,
    val,
    handlers: { handleChange, controlCheck, enabled },
  } = inputOb;

  const enable = enabled.includes(val.toLowerCase());

  return (
    <div>
      <input
        type={type}
        id={val}
        name={name}
        value={val}
        disabled={!enable}
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
