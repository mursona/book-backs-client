import { Button } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../../component/BookModal';
import { myContext } from '../../contextApi/Authcontext';
import ProductCard from './ProductCard'
const AllProducts = () => {
    const {user,logOut} = useContext(myContext)
    const [modalinfo, setmodalinfo] = useState(null)
    const data = useLoaderData()
    const  {category_name} = data
     const {data:product = [], isLoading} = useQuery({
        queryKey : ['allproducts',category_name],
        queryFn : async ()=>{
            const res = await fetch(`https://book-back-server.vercel.app/allproducts?category_name=${category_name}&email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('bookToken')}`
                }
            })
            const data = await res.json()
            return data 
        }
     })
     if(isLoading){
        return <p>lodding...</p>
     }

     

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className="max-w-lg mb-5 font-sans text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none  leading-none md:mx-auto">
            <span className="relative inline-block"> Category of
                    <span className="relative text-pink-600"> {category_name} </span>
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 -right-32 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                        <defs>
                        <pattern id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69" x="0" y="0" width=".135" height=".30">
                        <circle cx="1" cy="1" r=".7" />
                        </pattern>
                        </defs>
                        <rect
                        fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                        width="50"
                        height="22"
                        />
                    </svg>
                    </span>
            </h2>
            <div className='grid gap-8 mt-10 row-gap-8 lg:grid-cols-2'>
            {
              product.length ?  product.map(prod => <ProductCard setmodalinfo={setmodalinfo} key = {prod._id} prod = {prod}></ProductCard>)
              :
              <div className='text-center'>
              <h2 className='text-3xl  my-6 text-pink-600'>Please Login and Back <br />
              </h2>
              <Button onClick={logOut} color='pink' >Logout</Button>
              </div>
            }
            { modalinfo && <BookModal setmodalinfo={setmodalinfo} modalinfo={modalinfo}></BookModal>}
            </div>
        </div>
    );
};

export default AllProducts;