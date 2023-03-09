export default function Reset({ handleReset }) {
  return (
    <button
      type="reset"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleReset}
    >
      Reset
    </button>
  );
}
