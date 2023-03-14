import Loader from "./Loader";
import { useZstore } from "./store";

export function Packages() {
  const loadingPkg = useZstore((state) => state.loadingPkg);
  const data = useZstore.getState().packages;
  return (
    <>
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
