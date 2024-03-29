import { useResource } from "./store";
import { useRef } from "preact/hooks";

const SearchSVG = () => (
  <svg
    aria-hidden="true"
    className="w-5 h-5 text-gray-500 dark:text-gray-400"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        fill-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clip-rule="evenodd"
      ></path>
    </g>
  </svg>
);

function DisplayResource({ filteredResources }) {
  return (
    <ul>
      {filteredResources.map((resource, idx) => (
        <li key={idx}>
          {resource.group}
          <ul className="ml-10">
            {resource.Resources.map((Res, idres) => (
              <li key={idres} className="list-[square]">
                | {Res}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export function Resource() {
  const qref = useRef();
  const filterResources = useResource((state) => state.filterResources);
  const filteredResources = useResource((state) => state.filteredResources);
  const resetResources = useResource((state) => state.resetResources);

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="relative mb-3 xl:w-96" data-te-input-wrapper-init>
          <form id="form" className="flex space-x-2">
            <input
              ref={qref}
              onBlur={() => (qref.current.value = "")}
              onChange={() => filterResources(qref.current.value)}
              type="search"
              id="search"
              className="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-400 data-[te-input-state-active]:placeholder:opacity-400 motion-reduce:transition-none dark:text-neutral-600 dark:placeholder:text-neutral-600 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Search the resource"
            />
            <label
              htmlFor="search"
              className=" flex items-center space-x-2 pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              <SearchSVG className="w-5 h-5" />{" "}
              <span className="truncate max-w-[90%] text-black">Search</span>
            </label>
            <button
              type="button"
              form="form"
              id="form"
              onClick={resetResources}
              className="inline-block rounded bg-blue-700 px-6 pt-2.5 pb-2 text-lg font-medium uppercase leading-normal text-white  shadow-[0_2px_3px_-2px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              Reset
            </button>
          </form>
        </div>
      </div>

      <h2>{filteredResources.length} matching result(s)</h2>

      <div className="ml-10">
        <DisplayResource filteredResources={filteredResources} />
      </div>
    </>
  );
}
