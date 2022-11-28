import moment from 'moment/moment';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { myContext } from '../../../contextApi/Authcontext';
import { Input, Button } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

const AddProduct = () => {
    const { register, handleSubmit,formState: { errors },} = useForm();
    const {user} =  useContext(myContext)
    const naviget = useNavigate()
    const time = moment().format('lll');

    const imgkey = "923b3c7b9d23e9c45e25e15dcad9a629";

    console.log(imgkey);
    const handleAddproducts = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(upload => {
            if(upload.success){
            //    stored data on object for send db
                const myproducts = {
                    product_name : data.productName, 
                    image : upload.data.url,
                    product_price : data.price,
                    Market_Price : data.marketprice,
                    mobile :data.mobile,
                    purchase_year:data.purchase_year,
                    condition_type: data.condition,
                    brand_name: data.brand_name, 
                    productDetails: data.productDetails, 
                    location :data.location,
                    time:time,
                    userEmail : user?.email,
                    sellerName: user?.displayName
                }

                // save product information to the db
                fetch(`http://localhost:5000/allproducts?email=${user?.email}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('bookToken')}`
                    },
                    body: JSON.stringify(myproducts)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success('book add successfully');
                    naviget('/dashboard/myproducts')
                })
            }
        })
    }


    return (
        <div className='w-full p-7'>
        <h2 className="text-4xl">Add Book</h2>
        <form className='grid md:grid-cols-2 gap-6' onSubmit={handleSubmit(handleAddproducts)}>
           
           <div className='left w-ful'>
           <div className="form-control w-full">

                <Input label='Book Title' type="text" {...register("productName", {
                    required: "Book Title is Required"
                })} className="input input-bordered w-full" />
                {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
            </div>

            <div className="form-control w-full my-2">
                <Input label='Product Resale Price' type="text" {...register("price", {
                    required: "price is Required"
                })} className="input input-bordered w-full" />
                {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
            </div>

            <div className="form-control w-full my-2">
                <Input label='Product Location' type="text" {...register("location", {
                    required: "location is Required"
                })} className="input input-bordered w-full" />
                {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
            </div>

            <div className="form-control w-full my-2">
                <Input label='Market Price' type="text" {...register("marketprice", {
                    required: "Market Price is Required"
                })} className="input input-bordered w-full" />
                {errors.marketprice && <p className='text-red-500'>{errors.marketprice.message}</p>}
            </div>

            <div className="form-control w-full my-2">                
                <Input label='Mobile Number' type="text" {...register("mobile", {
                    required: "Mobile Number is Required"
                })} className="input input-bordered w-full" />
                {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
            </div>

            <div className="form-control w-full my-2">
                <Input label='Purchase Year' type="number" {...register("purchase_year", {
                    required: "purchase year is Required"
                })} className="input input-bordered w-full" />
                {errors.purchase_year && <p className='text-red-500'>{errors.purchase_year.message}</p>}
            </div>
            <div className="form-control w-full my-2 bg-blue-gray-50">
                <label className="label"> <span className="label-text">condition type</span></label>
                <select name="condition" {...register("condition", { required: true})} className="select select-bordered w-full">
                     <option value= 'excellent'> excellent </option>
                     <option value= 'good'> good </option>
                     <option value= 'fair'> fair </option>
                  </select>
            </div>
           </div>

           <div className='right'>
            <div className="form-control w-full my-2 bg-blue-gray-50">
                <label className="label"> <span className="label-text"> brand name</span></label>
                <select name="category_name" {...register("brand_name", { required: true})} className="select select-bordered w-full">
                     <option value= 'fiction'> Fiction </option>
                     <option value= 'horror'> Horror </option>
                     <option value= 'detective'> Detective </option>
                  </select>
            </div>

          
          
            <div className="form-control w-full my-2">
                <Input label='Photo' type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full" />
                {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
            </div>

            <div className="form-control w-full my-2">

                <Textarea label='Book Details' style={{height:'150px'}}  {...register("productDetails", { required: "productDetails Required"})} rows="10" className='input input-bordered w-full'></Textarea>
                {errors.productDetails && <p className='text-red-500'>{errors.productDetails.message}</p>}
            </div>
            <Button type='submit' color='pink' variant='outlined'>Add Now</Button>
           </div>

        </form>
    </div>
    );
};

export default AddProduct;

