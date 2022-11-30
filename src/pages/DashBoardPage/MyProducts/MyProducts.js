import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { myContext } from "../../../contextApi/Authcontext";
import useTitle from "../../../CustomeHOOk/MakeDynamicTitle/UseTitle";

const MyProducts = () => {
  const { user } = useContext(myContext);
  useTitle('My Products');
  const { data: myproducts = [], isLoading, refetch } = useQuery({
    queryKey: ["myproduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://book-back-server.vercel.app/myproduct?email=${user?.email}`,
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
    return <progress className="progress w-56"></progress>
  }

  const handlecampain = (id) => {
    fetch(`https://book-back-server.vercel.app/campaign?productId=${id}&email=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("backToken")}`,
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      refetch()
    })
    
  };

  return (
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
    <div className="overflow-hidden">
        <table className="table-auto min-w-full bg-blue-gray-50">
          <thead className='border-2 border-spacing-2 border-indigo-100'>
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50"></th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Book Name</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50">Price </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"> Status </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50"> Advertise </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"> Delete </th>
            </tr>
          </thead>
          <tbody>
            {myproducts.length > 0 ? (
              <>
                {myproducts.map((product) => (
                  <tr key={product._id} className="border-2 border-spacing-2 border-indigo-100">
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50"></th>
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {product.product_name} </th>
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50"> {product.product_price} </th>
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {" "}
                      <button  className={`btn btn-sm ${product.sold === true ?'btn-warning' : 'btn-success'}`}>
                       {product.sold === true ? "Not Available" : "Availble"}
                      </button>{" "}
                    </th>
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50">
                      {" "}
                      <button
                      disabled = {product.sold === true}
                        onClick={() => handlecampain(product._id)}
                        className={`btn btn-sm  ${product.campain === true ? 'btn-success':'btn-primary'}`}
                      >
                       {product.campain === true ? 'Ad is running' : 'Start Campain'}
                      </button>{" "}
                    </th>
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {" "}
                      <button className="btn btn-sm btn-warning">
                        Delete
                      </button>{" "}
                    </th>
                  </tr>
                ))}
              </>
            ) : (
              <h3 className="text-xl text-center text-success">
                No Product Abailable For Sales Add Frist{" "}
              </h3>
            )}
          </tbody>
        </table>
        </div>
      </div>
      </div>
      </div>
  );
};

export default MyProducts;
