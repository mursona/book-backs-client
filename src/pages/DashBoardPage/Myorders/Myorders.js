import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { myContext } from "../../../contextApi/Authcontext";
const Myorders = () => {
  const { user } = useContext(myContext);
  const { data: bookedproduct = [], isLoading } = useQuery({
    queryKey: ["bookingproduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookingproduct?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("bookToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>loadding ....</p>;
  }
  return (
    <div>
      <h2 className="text-center my-4 text-2xl">
        My Orders - {bookedproduct.length}{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="bg-pink-50 text-gray-700 border-separate w-full shadow-none">
          <thead>
            <tr>
              <th className="bg-indigo-900 text-white px-4 py-2">Serial</th>
              <th className="bg-indigo-900 text-white px-4 py-2">Product Name</th>
              <th className="bg-indigo-900 text-white px-4 py-2"> Category Name </th>
              <th className="bg-indigo-900 text-white px-4 py-2"> Product Price </th>
              <th className="bg-indigo-900 text-white px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            { bookedproduct.length && bookedproduct.map((booked, index) => (
              <tr key = {booked._id}>
                <th class="p-4">{index + 1}</th>
                <th class="p-4"> {booked.product_name} </th>
                <th class="p-4"> {booked.brand_name} </th>
                <th class="p-4"> {booked.product_price} </th>
                <th class="p-4">
                  <button className="btn btn-sm">Buy Now</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorders;