import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
console.log(stripePromise);


const ProductBuy = () => {
    
    const bookedprodut = useLoaderData();
    const {product_price,product_name} = bookedprodut
    console.log(bookedprodut);
    return (
      <div className="bg-pink-50 text-gray-700 border border-spacing-1 rounded-md py-6 px-6">
        <h1 className="text-2xl"> Pay for {product_name} </h1>
        <div>
          <h2 className="text-xl text-success my-1">
            Price <strong>{product_price}</strong>{" "}
          </h2>
        </div>
        <div className="my-6">
          <Elements stripe={stripePromise}> <CheckOut bookedprodut={bookedprodut}></CheckOut> </Elements>
        </div>
      </div>
    );
  };

export default ProductBuy;