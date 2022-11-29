import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { MdOutlineVerified } from 'react-icons/md';
import { myContext } from '../../../contextApi/Authcontext';
import useTitle from '../../../CustomeHOOk/MakeDynamicTitle/UseTitle';

const Allseller = () => {
   const {user} = useContext(myContext);
   useTitle('Allseller');
    const {data : sellers = [], isLoading, refetch} = useQuery({
        queryKey : ['seller',user?.email],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/seller?email=${user?.email}`,{
              headers: {
                authorization: `bearer ${localStorage.getItem('backToken')}`
            }
            });
            const data = await res.json()
            return data
        }
    })


    const handleVerify = (id) =>{
      fetch(`http://localhost:5000/users?userid=${id}&email=${user?.email}`, {
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
    }


    const deleteseller = (id) =>{
      fetch(`http://localhost:5000/deleteuser?id=${id}`,{
        method : 'DELETE',
      })
      .then(res => res.json())
      .then(data => {refetch()})
    }

    if(isLoading){
      return <p>Loadding ...</p>
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
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Status</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-pink-50">Action</th>
            </tr>
          </thead>
          <tbody>
            { sellers && sellers.map((seller, index) => (
              <tr key={seller._id} className="border-2 border-spacing-2 border-indigo-100">
                <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-pink-50">{index + 1}</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> {seller.name} </th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap bg-pink-50">{seller.email}</th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"><button onClick={()=>handleVerify(seller._id)} className= {`btn btn-sm btn-primary ${seller.verified === true ? 'btn-primary' : 'btn-warning'}`} >
                  {seller.verified === true ? <MdOutlineVerified></MdOutlineVerified> : 'verify Now' }
                  </button></th>
                <th className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap bg-pink-50"><button onClick={()=>deleteseller(seller._id)} className='btn btn-sm btn-warning'>Delete</button></th>
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

export default Allseller;