import Loader from "./Loader";
import { useZstore, fetchPackages } from "./store";

export function Packages() {
  const loadingPkg = useZstore((state) => state.loadingPkg);
  const data = useZstore.getState().packages;
  const disabled = useZstore((state) => state.disabled);
  const searched_package = useZstore((state) => state.searched_package);

  function handleInput({ target: { value } }) {
    useZstore.setState({ searched_package: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    useZstore.setState({ packages: null });
    fetchPackages(searched_package);
  }
  return (
    <>
      <div class="flex justify-center space-x-2 m-2">
        <form id="package" onSubmit={handleSubmit}>
          <input value={searched_package} onChange={handleInput} />
          <button
            type="submit"
            form="package"
            disabled={disabled}
            value={searched_package}
            className="inline-block text-black rounded bg-indigo-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            SEARCH
          </button>
        </form>
      </div>
      {loadingPkg ? (
        <Loader />
      ) : (
        <div className="flex flex-col overflow-y-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full">
              <table className="table-auto min-w-full text-center text-sm font-light">
                <thead className="sticky top-0 border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" class=" px-6 py-4">
                      #
                    </th>
                    <th scope="col" class=" px-6 py-4">
                      Package
                    </th>
                    <th scope="col" class=" px-6 py-4">
                      Downloads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((obj, idx) => {
                      const [k] = Object.keys(obj);
                      return (
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap  px-6 py-4 font-medium">
                            {idx + 1}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">{k}</td>
                          <td clasNames="whitespace-nowrap  px-6 py-4">
                            {obj[k].toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
