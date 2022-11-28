import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { myContext } from '../../contextApi/Authcontext';
import useTokenHook from '../../CustomeHOOk/useTokenHook/useTokenHook';
import { Button } from "@material-tailwind/react";
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

const Signup = () => {
    const { register, handleSubmit,formState: { errors },} = useForm();
    const [signUpError, setSignUPError] = useState('')
    const {signuP,updateUser} = useContext(myContext)
    const [useremail, setuseremail] = useState('')
    const [token] = useTokenHook(useremail)
    const naviget = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


     if(token){
        naviget(from, { replace: true });
     }

    const handleSignup = (data) => {
        setSignUPError('');
        signuP(data.email, data.password)
        
            .then(result => {
                const user = result.user;
                console.log(user);
                
                const userInfo = {
                    displayName: data.name
                    
                }
                updateUser(userInfo)
                    .then(() => {
                        storeUserInDB(data.name,data.email,data.role) 
                        toast.success('Signup Complete')
                        naviget('/') 
                     })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }


    const storeUserInDB = (name, email,role) =>{
        const user = {name,email,role};
        fetch(`http://localhost:5000/users`,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setuseremail(email)  
        })
    }


   

    return (
        <div className='my-10 flex justify-center items-center'>
        <div className='flex flex-col w-full max-w-md px-4 py-8 bg-pink-50 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
            <div className="self-center mb-6 text-xl font-light text-gray-700 sm:text-2xl dark:text-white">
                Sign Up
            </div>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="flex flex-col mb-6">
                <div className="form-control flex relative">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <FaRegUserCircle></FaRegUserCircle>
                </span>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div> 
                </div>
                <div className="flex flex-col mb-6">
                <div className="form-control flex relative">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <HiOutlineMail></HiOutlineMail>
                </span>
                    <input type="email" {...register("email", {
                        required: true
                    })} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                </div>
                <div className="flex flex-col mb-6">
                <div className="form-control flex relative">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <RiLockPasswordLine></RiLockPasswordLine>
                </span>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                </div>
                <div className="flex flex-col mb-6 text-center">
                <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text text-md">Selected Role</span></label>
                    <select name="role" {...register("role", { required: true})} className="select select-bordered w-full">
                     <option value= 'buyer'> buyer </option>
                     <option value= 'seller'> seller </option>
                  </select>

                  </div>
                </div>
                <Button color='pink' className='mt-4 mx-auto w-full' value="Sign Up" type="submit">Sign Up</Button>
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <span className='text-center'>
            <p>Already have an account <Link className='text-secondary underline' to="/login" >Please Login</Link></p>
            </span>
        </div>
    </div>
    );
};

export default Signup;