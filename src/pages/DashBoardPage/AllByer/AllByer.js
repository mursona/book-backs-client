import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

import {myContext} from '../../../contextApi/Authcontext'

const AllByer = () => {
  const {user} = useContext(myContext)
  const { data: buyers = [], isLoading } = useQuery({
    queryKey: ["buyer",user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/buyer?email=${user?.email}`,{
        headers: {
          authorization: `bearer ${localStorage.getItem('bookToken')}`
      }
      });
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <p>Loadding..</p>
  }
  return (
    <div className="overflow-x-auto">
      <table className="bg-pink-50 text-gray-700 border-separate w-full shadow-none">
        <thead>
          <tr>
            <th className="bg-indigo-900 text-white px-4 py-2">ID</th>
            <th className="bg-indigo-900 text-white px-4 py-2">Name</th>
            <th className="bg-indigo-900 text-white px-4 py-2">Email</th>
            <th className="bg-indigo-900 text-white px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((buyer, index) => (
            <tr key={buyer._id}>
              <th className="p-4">{index + 1}</th>
              <th className="p-4"> {buyer.name} </th>
              <th className="p-4">{buyer.email}</th>
              <th className="p-4"><button className="btn btn-sm btn-warning">Delete</button></th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllByer;
