import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { myContext } from "../../../contextApi/Authcontext";

const MyProducts = () => {
  const { user } = useContext(myContext);
  const { data: myproducts = [], isLoading, refetch } = useQuery({
    queryKey: ["myproduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://book-back-server.vercel.app/myproduct?email=${user?.email}`,
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
    return <p>Loadding...</p>;
  }

  const handlecampain = (id) => {
    fetch(`https://book-back-server.vercel.app/campain?productId=${id}&email=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("bookToken")}`,
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      refetch()
    })
    
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="bg-pink-50 text-gray-700 border-separate w-full shadow-none">
          <thead>
            <tr>
              <th className="bg-indigo-900 text-white px-4 py-2"></th>
              <th className="bg-indigo-900 text-white px-4 py-2">Product Name</th>
              <th className="bg-indigo-900 text-white px-4 py-2">Price </th>
              <th className="bg-indigo-900 text-white px-4 py-2"> Status </th>
              <th className="bg-indigo-900 text-white px-4 py-2"> Advertise </th>
              <th className="bg-indigo-900 text-white px-4 py-2"> Delete </th>
            </tr>
          </thead>
          <tbody>
            {myproducts.length > 0 ? (
              <>
                {myproducts.map((product) => (
                  <tr key={product._id}>
                    <th className="p-4"></th>
                    <th className="p-4"> {product.product_name} </th>
                    <th className="p-4"> {product.product_price} </th>
                    <th className="p-4">
                      {" "}
                      <button className="btn btn-sm btn-success">
                        available
                      </button>{" "}
                    </th>
                    <th>
                      {" "}
                      <button
                        onClick={() => handlecampain(product._id)}
                        className={`btn btn-sm  ${product.campain === true ? 'btn-success':' btn-outline btn-success'}`}
                      >
                       {product.campain === true ? 'add running' : 'start campain'}
                      </button>{" "}
                    </th>
                    <th>
                      {" "}
                      <button className="btn btn-sm btn-warning">
                        Delete
                      </button>{" "}
                    </th>
                  </tr>
                ))}
              </>
            ) : (
              <h3 className="text-4xl text-center text-success">
                No Product Abailable For Sells Add More{" "}
              </h3>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
