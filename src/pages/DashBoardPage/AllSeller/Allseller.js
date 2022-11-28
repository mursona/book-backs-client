import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { myContext } from '../../../contextApi/Authcontext';
import { MdOutlineVerifiedUser } from "react-icons/md";


const Allseller = () => {
   const {user} = useContext(myContext)
    const {data : sellers = [], isLoading, refetch} = useQuery({
        queryKey : ['seller',user?.email],
        queryFn : async ()=>{
            const res = await fetch(`https://book-back-server.vercel.app/seller?email=${user?.email}`,{
              headers: {
                authorization: `bearer ${localStorage.getItem('bookToken')}`
            }
            });
            const data = await res.json()
            return data
        }
    })


    const handleVerify = (id) =>{
      fetch(`https://book-back-server.vercel.app/users?userid=${id}&email=${user?.email}`, {
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
    }

    if(isLoading){
      return <p>Loadding ...</p>
    }

    return (
        <div className="overflow-x-auto">
        <table className="bg-pink-50 text-gray-700 border-separate w-full shadow-none">
          <thead>
            <tr>
              <th className="bg-indigo-900 text-white px-4 py-2">serial</th>
              <th className="bg-indigo-900 text-white px-4 py-2">Name</th>
              <th className="bg-indigo-900 text-white px-4 py-2">Email</th>
              <th className="bg-indigo-900 text-white px-4 py-2">Status</th>
              <th className="bg-indigo-900 text-white px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
                {sellers.map((seller, index) => (
                  <tr key={seller._id}>
                    <th className="p-4">{index + 1}</th>
                    <th className="p-4"> {seller.name} </th>
                    <th className="p-4">{seller.email}</th>
                    <th className="p-4"><button onClick={()=>handleVerify(seller._id)} className= {`btn btn-sm btn-primary ${seller.verified === true ? 'btn-primary' : 'btn-warning'}`} >
                      {seller.verified === true ? <MdOutlineVerifiedUser></MdOutlineVerifiedUser> : 'verify Now' }
                      </button></th>
                    <th className="p-2"><button className='btn btn-sm btn-warning'>Delete</button></th>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    );
};

export default Allseller;