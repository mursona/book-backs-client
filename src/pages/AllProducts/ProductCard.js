import React from "react";
import { FiPhoneCall } from 'react-icons/fi';
import { ImLocation2 } from 'react-icons/im';
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FaAddressCard } from "react-icons/fa";

const ProductCard = ({ prod ,setmodalinfo}) => {
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
    sellerName
  } = prod;

  const {data : user, isLoading} = useQuery({
    queryKey : ['user',sellerName],
    queryFn : async ()=>{
      const res = await fetch(`https://book-back-server.vercel.app/user?sellerName=${sellerName}`)
      const data = await res.json()
      return data
    }
  })

  if(isLoading){
    return <p>loadding...</p>
  }

  console.log(user)



  return (
      <Card className="w-full bg-pink-50">
        <div className="grid gap-2 row-gap-2 lg:grid-cols-2">
          <div>
          <CardHeader color="blue" className="relative h-56 text-center">
          <img
          src={image}
          alt="img-blur-shadow"
          className="h-full w-full"/>
          </CardHeader>
          </div>
          <div>
          <CardBody>
      <Typography variant="large" className='font-semibold'>{product_name}</Typography>
      <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Category of {brand_name} 
        </Typography>
        <Typography variant="h5" className="mb-2">
        $ {product_price}
        </Typography>
        <Typography variant="small" color="gray" className="mr-2">
        Market price {Market_Price}
        </Typography>
        <Typography variant="small" color="gray" className="mr-2">
        purchase year {purchase_year}
        </Typography>
        <Typography variant="small" color="gray" className="mr-2">
        condition {condition_type}
        </Typography>
        <Typography className='mx-4'>
        {productDetails.slice(0,300)}
        </Typography>
      </CardBody>
          </div>
        </div>
        <div className="flex mx-4">
          <Typography variant="small">Post by - {sellerName}</Typography>
          <Typography>{ user?.verified === true && <span className="text-xl text-green-600 mx-6"><FaAddressCard></FaAddressCard></span>}</Typography>
      <Typography variant="small">{time}</Typography>
          </div>
        <hr />
        <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small" color="gray" className="flex gap-1 mr-2">
        <div className="mr-2"><FiPhoneCall/></div> {mobile}
        </Typography>
        <Typography variant="small" color="gray" className="mr-2">
        <ImLocation2/> {location}
        </Typography>
        <Typography variant="small" color="gray" className="mr-2">
        <label onClick={()=>setmodalinfo(prod)} htmlFor="openmodal" className="btn btn-success">Book Now</label>
        </Typography>
      </CardFooter>
      </Card>
  );
};

export default ProductCard;
