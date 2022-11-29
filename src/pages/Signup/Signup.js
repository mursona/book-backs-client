import { Button, Input } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../../contextApi/Authcontext';
import useTitle from '../../CustomeHOOk/MakeDynamicTitle/UseTitle';

const Signup = () => {
    useTitle('SignUp');
    const { register, handleSubmit,formState: { errors },} = useForm();
    const [signUpError, setSignUPError] = useState('')
    const {signuP,updateUser} = useContext(myContext)
    const naviget = useNavigate()
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
            fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.jwtToken) {
                    localStorage.setItem('backToken', data.jwtToken);
                    naviget('/')
                }
            });
            
        })
    }


   

    return (
        <div className='my-10 flex justify-center items-center'>
        <div className='flex flex-col w-full max-w-md px-4 py-8 bg-pink-50 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
        <div className="self-center mb-6 text-xl font-light text-gray-700 sm:text-2xl dark:text-white">
                SignUp
            </div>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <Input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <Input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <Input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label"> <span className="label-text">Select Type Of Account</span></label>
                    <select name="role" {...register("role", { required: true})} className="select select-bordered rounded-md w-full">
                     <option value= 'buyer'> buyer </option>
                     <option value= 'seller'> seller </option>
                  </select>
                </div>
                <div className='text-center mx-12 my-2'>
                <Button type="submit" color='pink' variant='gradient'>SignUp</Button>
                </div>
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <div className='text-center my-2'>
            <p>Already have an account <Link className='text-secondary underline' to="/login">Please Login</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Signup;