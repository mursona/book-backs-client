import React from "react";

const CampainCard = ({ campcard }) => {
  const {
    image,
    product_name,
    product_price,
    sellerName,
    time,
    Market_Price
  } = campcard;
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
    <div  style={{ background: `url(${image})`, backgroundSize:'cover'}}  className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>

    <div className="w-56 -mt-16 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{product_name}</h3>

        <div className="text-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">$ {product_price}</span> From
            <span className="font-bold text-red-800 dark:text-gray-200"> $ <del>{Market_Price}</del></span> <br />
            <span className="font-semibold text-gray-800 dark:text-gray-200">{time}</span> <br />
            <span className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Post by {sellerName}</span>
        </div>
    </div>
      </div>
  );
};

export default CampainCard;
