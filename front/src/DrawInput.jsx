export default function DrawInput({ inputOb }) {
  const {
    name,
    type,
    val,
    handlers: { handleChange, controlCheck },
  } = inputOb;

  return (
    <div className="text-sm">
      <label
        htmlFor={val}
        className={
          name === "Framework"
            ? "hover:bg-sky-200 p-1 rounded m-1"
            : "hover:bg-green-200 p-1 rounded m-1"
        }
      >
        <input
          type={type}
          id={val}
          name={name}
          value={val}
          checked={controlCheck(name, val)}
          onChange={handleChange}
        />
        {val}
      </label>
    </div>
  );
}
/*
type={inputOb.type}
          id={inputOb.val}
          name={inputOb.name}
          value={inputOb.val}
          */
