import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

import {myContext} from '../../../contextApi/Authcontext'

const AllByer = () => {
  const {user} = useContext(myContext)
  const { data: buyers = [], isLoading,refetch } = useQuery({
    queryKey: ["buyer",user?.email],
    queryFn: async () => {
      const res = await fetch(`https://book-back-server.vercel.app/buyer?email=${user?.email}`,{
        headers: {
          authorization: `bearer ${localStorage.getItem('backToken')}`
      }
      });
      const data = await res.json();
      return data;
    },
  });

  const deletebuyer = (id) =>{
    fetch(`https://book-back-server.vercel.app/deleteuser?id=${id}`,{
      method : 'DELETE',
    })
    .then(res => res.json())
    .then(data => {refetch()})
  }

  if(isLoading){
    return <div className='w-10 h-10 border-8 text-7xl text-center border-dashed rounded-full animate-spin mt-5 border-pink-600'></div>
  }
  return (
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
    <div className="overflow-hidden">
      <table className="table-auto min-w-full bg-blue-gray-50">
        <thead className='border-2 border-spacing-2 border-indigo-100'>
          <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50">serial</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50">Email</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          { buyers && buyers.map((buyer, index) => (
            <tr key={buyer._id} className="border-2 border-spacing-2 border-indigo-100">
              <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50">{index + 1}</th>
              <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {buyer.name} </th>
              <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50">{buyer.email}</th>
              <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><button onClick={()=>deletebuyer(buyer._id)} className="btn btn-sm btn-warning">Delete</button></th>
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

export default AllByer;
