import { Button, Input } from "@material-tailwind/react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { myContext } from "../contextApi/Authcontext";

const BookModal = ({ modalinfo,setmodalinfo }) => {

  const { user } = useContext(myContext);
  // get product data
  const { product_name, product_price, brand_name,userEmail:sellerEmail, } = modalinfo;
  console.log(modalinfo)
  const handleBooking = (event) =>{
    event.preventDefault();
    setmodalinfo(null)
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const product_name = form.product_name.value;
    const product_price = form.product_price.value;
    const location = form.location.value;
    const bookingdata = {
        product_name,
        product_price,
        location,
        name,
        email,
        phone,
        brand_name,
        sellerEmail
    }

    fetch(`http://localhost:5000/bookingproduct?email=${user?.email}`,{
      method : 'POST',
      headers : {
        'content-type' : 'application/json',
        authorization: `bearer ${localStorage.getItem('backToken')}`
      },
      body : JSON.stringify(bookingdata)
    })
    .then(res => res.json())
    .then(data =>{
      // bookingproduct()
    })

    toast.success(`${product_name} is booked`)
  }


  // }

  return (

    <>
<div className='fixed pin z-50 top-16 mx-80 px-20 py-10 w-90 overflow-auto bg-white flex shadow-lg'>
    <div className="mx-6 my-4">
      <div className="relative">
        <h3 className="text-lg font-bold text-center">Confirm Booking {product_name}</h3>
        <form
          onSubmit={handleBooking}
          className="grid grid-cols-1 gap-3 mt-10"
        >
          <Input
            name="product_name"
            defaultValue={product_name}
            type="text"
            disabled
            className="input w-full input-bordered"
          />
          <Input
            name="product_price"
            defaultValue={product_price}
            type="text"
            disabled
            className="input w-full input-bordered"
          />
          <Input
            name="name"
            defaultValue={user?.displayName}
            type="text"
            disabled
            className="input w-full input-bordered"
          />
          <Input
            name="email"
            defaultValue={user?.email}
            type="email"
            disabled
            className="input w-full input-bordered"
          />
          <Input
            name="phone"
            type="text"
            placeholder="Your Phone "
            className="input w-full input-bordered"
            required
          />
          <Input
            name="location"
            type="text"
            placeholder="Metting Location ?"
            className="input w-full input-bordered"
            required
          />
          <br />
          <Button type="submit" color="pink" variant="gradient">Book Now</Button>
        </form>
        </div>
    </div>
  </div>
  </>


    
  );
};

export default BookModal;


       
