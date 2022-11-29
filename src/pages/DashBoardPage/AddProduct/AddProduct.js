import { Button, Input } from '@material-tailwind/react';
import moment from 'moment/moment';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { myContext } from '../../../contextApi/Authcontext';
import useTitle from '../../../CustomeHOOk/MakeDynamicTitle/UseTitle';

const AddProduct = () => {
    const { register, handleSubmit,formState: { errors },} = useForm();
    const {user} =  useContext(myContext);
    useTitle('Add Product');
    const naviget = useNavigate()
    const time = moment().format('lll');
    // const imgkey = process.env.REACT_APP_IMAGE_SEC
    // console.log(imgkey);
    const handleAddproducts = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=1ea537576bb71d4206b8a2ae24988322`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(upload => {
            if(upload.success){
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
                    sellerName: user?.displayName,
                    sold : false
                }

                // save product information to the db
                fetch(`http://localhost:5000/allproducts?email=${user?.email}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('backToken')}`
                    },
                    body: JSON.stringify(myproducts)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success('product add successfully');
                    naviget('/dashboard/myproducts')
                })
            }
        })
    }


    return (
        <div className='w-full p-7 bg-pink-50'>
        <h2 className="text-2xl text-gray-700 font-semibold underline-offset-8 underline my-6">Add Products</h2>
        <form className='grid md:grid-cols-2 gap-6' onSubmit={handleSubmit(handleAddproducts)}>

           <div className='left w-ful'>
           <div className="form-control w-full">
                <label className="label"> <span className="label-text">Product Name</span></label>
                <Input type="text" {...register("productName", {
                    required: "productName is Required"
                })} className="input input-bordered w-full" />
                {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label"> <span className="label-text">Product price</span></label>
                <Input type="text" {...register("price", {
                    required: "price is Required"
                })} className="input input-bordered w-full" />
                {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label"> <span className="label-text">Product location</span></label>
                <Input type="text" {...register("location", {
                    required: "location is Required"
                })} className="input input-bordered w-full" />
                {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label"> <span className="label-text">Product Market Price</span></label>
                <Input type="text" {...register("marketprice", {
                    required: "Market Price is Required"
                })} className="input input-bordered w-full" />
                {errors.marketprice && <p className='text-red-500'>{errors.marketprice.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label"> <span className="label-text">Mobile number</span></label>
                <Input type="text" {...register("mobile", {
                    required: "price is Required"
                })} className="input input-bordered w-full" />
                {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label"> <span className="label-text">Year of purchase</span></label>
                <Input type="number" {...register("purchase_year", {
                    required: "purchase year is Required"
                })} className="input input-bordered w-full" />
                {errors.purchase_year && <p className='text-red-500'>{errors.purchase_year.message}</p>}
            </div>
           </div>

           <div className='right'>
           <div className="form-control w-full">
                <label className="label"> <span className="label-text">Condition Type</span></label>
                <select name="condition" {...register("condition", { required: true})} className="select select-bordered w-full">
                     <option value= 'excellent'> excellent </option>
                     <option value= 'good'> good </option>
                     <option value= 'fair'> fair </option>
                  </select>
            </div>

            <div className="form-control w-full">
                <label className="label"> <span className="label-text"> Book Category</span></label>
                <select name="category_name" {...register("brand_name", { required: true})} className="select select-bordered w-full">
                     <option value= 'fiction'> Fiction Series </option>
                     <option value= 'horror'> Horror Series </option>
                     <option value= 'detective'> Detective Series </option>
                  </select>
            </div>

          
          
            <div className="form-control w-full">
                <label className="label"> <span className="label-text">Photo</span></label>
                <Input type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full" />
                {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label"> <span className="label-text">Product Details</span></label>
                <textarea style={{height:'150px'}}  {...register("productDetails", { required: "productDetails Required"})}  placeholder='product details ...' rows="10" className='px-4 py-4 input input-bordered w-full'></textarea>
                {errors.productDetails && <p className='text-red-500'>{errors.productDetails.message}</p>}
            </div>
            <Button type="submit" color='pink' variant='gradient'>Add Book</Button>
           </div>


        </form>
    </div>
    );
};

export default AddProduct;

