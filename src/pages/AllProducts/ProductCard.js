import React, { useContext } from "react";
import { FiPhoneCall } from 'react-icons/fi';
import { ImLocation2 } from 'react-icons/im';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { useQuery } from "@tanstack/react-query";
import { myContext } from "../../contextApi/Authcontext";
import toast from "react-hot-toast";
import { Button } from "@material-tailwind/react";
const ProductCard = ({ prod ,setmodalinfo}) => {
  const {user:buyer} = useContext(myContext)
  const {
    product_name,
    image,
    product_price,
    Market_Price,
    mobile,
    purchase_year,
    condition_type,
    brand_name,
    productDetails,
    location,
    time,
    sellerName,
    _id
  } = prod;

  const {data : user, isLoading} = useQuery({
    queryKey : ['user',sellerName],
    queryFn : async ()=>{
      const res = await fetch(`https://book-back-server.vercel.app/user?sellerName=${sellerName}`)
      const data = await res.json()
      return data
    }
  })

const reportAdmin = (id) =>{
  fetch(`https://book-back-server.vercel.app/report?id=${id}&email=${buyer?.email}`,{
    method : 'PUT',
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("backToken")}`,
    },
  })
  .then(res => res.json())
      .then(data => {
        if(data.modifiedCount>0){
          toast.success('report send successFull')
        }
      })
}

  if(isLoading){
    return <progress className="progress w-56"></progress>
  }


  return (
    <div className="flex max-w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="w-1/4 bg-cover" style={{ background: `url(${image})`, backgroundSize:'cover'}}></div>

    <div className="w-3/4 p-4 md:p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">$ {product_price}</h1>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Series - {brand_name}</h1>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{product_name}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{productDetails.slice(0,200)}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{time}</p>

        <div className="flex mt-2 item-center">
        <div className=" flex flex-wrap my-2 rounded-md"> 
              <span className="flex mx-1 p-1 bg-gray-50 my-1 rounded-md items-center"> <div className="mr-2"><FiPhoneCall/></div> {mobile} </span>
              <span className="flex mx-1 p-1 bg-gray-50 my-1 rounded-md items-center"> Market Price: ${Market_Price}</span>
              <span className="flex mx-1 p-1 bg-gray-50 my-1 rounded-md items-center"> Product Price: ${product_price}</span>
              <span className="flex mx-1 p-1 bg-gray-50 my-1 rounded-md items-center"> Purchase Year: {purchase_year} </span>
              <span className="flex mx-1 p-1 bg-gray-50 my-1 rounded-md items-center">  Condition: {condition_type}</span>
              <span className="flex mx-1 p-1 bg-gray-50 my-1 rounded-md items-center"> <ImLocation2/> {location} </span>
            </div>
        </div>
        <div className="flex justify-between mt-3 item-center">
            <h1 className="text-amber-600 flex text-2xl font-semibold dark:text-gray-200 md:text-xl">{sellerName} { user?.verified === true && <span className="text-2xl mx-2 text-indigo-300"><MdOutlineVerifiedUser></MdOutlineVerifiedUser></span>}</h1>
            <div> { <Button onClick={()=>setmodalinfo(prod)} color='pink' variant="gradient" >Book Now</Button>}
              <Button onClick={()=>reportAdmin(_id)} color='pink' variant='outlined' className="mx-4">Report</Button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default ProductCard;
