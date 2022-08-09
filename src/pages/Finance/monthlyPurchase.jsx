import React from 'react';

const MonthlyPurchase = () => {
  return (
    <>
    <div className="flex m-6 flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <h3>Monthly Purchase Report</h3>
              <table className="min-w-full rounded-lg text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Sr. No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Costomer Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      *
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      *
                    </th>{" "}
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      *
                    </th>{" "}
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      *
                    </th>{" "}
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      *
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Mark
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Otto
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>{" "}
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>{" "}
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>{" "}
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default MonthlyPurchase;
