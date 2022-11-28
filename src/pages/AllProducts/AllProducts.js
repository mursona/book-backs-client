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
        <div className='my-10'>
            <h2 className='text-center text-3xl text-gray-800'> {category_name} Brand products</h2>
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
    );
};

export default AllProducts;