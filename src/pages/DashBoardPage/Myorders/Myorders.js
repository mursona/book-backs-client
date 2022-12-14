import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TiTickOutline } from 'react-icons/ti';
import { myContext } from "../../../contextApi/Authcontext";
import useTitle from "../../../CustomeHOOk/MakeDynamicTitle/UseTitle";

const Myorders = () => {
  const { user } = useContext(myContext);
  useTitle('My Orders');

  const { data: bookedproduct = [], isLoading } = useQuery({
    queryKey: ["bookingproduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://book-back-server.vercel.app/bookingproduct?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("backToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return    <div className='w-10 h-10 border-8 text-7xl text-center border-dashed rounded-full animate-spin mt-5 border-pink-600'></div>;
  }
  return (
   <>
    {
      bookedproduct &&
      <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      <h2 className="text-center my-4 text-2xl">
        My Orders {bookedproduct.length}{" "}
      </h2>
        <table className="table-auto min-w-full bg-blue-gray-50">
          <thead className='border-2 border-spacing-2 border-indigo-100'>
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50">Serial</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Book Name</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50"> Category Name </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"> Book Price </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50">Status</th>
            </tr>
          </thead>
          <tbody>
            { bookedproduct.length > 0 && bookedproduct.map((booked, index) => (
              <tr key = {booked._id} className="border-2 border-spacing-2 border-indigo-100">
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50">{index + 1}</th>
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {booked.product_name} </th>
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50"> {booked.brand_name} </th>
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {booked.product_price} </th>
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50">
                  {
                    booked.sold === true ?
                     <button className="btn btn-success flex text-indigo-400">
                       Payed <TiTickOutline></TiTickOutline>
                     </button>
                    :
                    <>
                    <Link to = {`/dashboard/purchase/${booked._id}`} className="btn btn-sm"> Buy Now </Link>
                    </> 
                    }
                  
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>
    }
   </>
  );
};

export default Myorders;