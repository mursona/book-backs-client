import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { myContext } from "../../../contextApi/Authcontext";
import useTitle from '../../../CustomeHOOk/MakeDynamicTitle/UseTitle';

const Reports = () => {
  const {user:adminemail} = useContext(myContext)

  useTitle('Reports');
  const { data: reposts } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/report?email=${adminemail?.email}`,{
        headers: {
            authorization: `bearer ${localStorage.getItem('backToken')}`
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
    <div className="overflow-hidden">
      <table className="table-auto min-w-full bg-blue-gray-50">
        <thead className='border-2 border-spacing-2 border-indigo-100'>
          <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50">serial</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">sellerName</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50">Product Name</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"> Brand Name </th>
          </tr>
        </thead>
        <tbody>
          {reposts &&
            reposts.map((report, index) => (
              <tr className="border-2 border-spacing-2 border-indigo-100">
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50"> {index + 1} </th>
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {report.sellerName} </th>
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50"> {report.product_name} </th>
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {report.brand_name} </th>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
  );
};

export default Reports;
