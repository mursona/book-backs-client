import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../contextApi/Authcontext';
import useTokenHook from '../../CustomeHOOk/useTokenHook/useTokenHook';
import { Button } from '@material-tailwind/react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = () => {
    const { register, handleSubmit,formState: { errors },} = useForm();
    const [loginError, setLoginError] = useState(''); 
    const {logIn,googleSignin} = useContext(authContext) 
    const [useremail, setuseremail] = useState('');
    const [token] = useTokenHook(useremail)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, { replace: true });
    }
    
    const handlLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/') 
                setuseremail(data.email)
            })
            .catch(error => {
                setLoginError(error.message);
            });
    }

    const handleGoogleSignin = () =>{
        googleSignin()
        .then(result => {
          const user = result.user;
          const name = user.displayName;
          const email = user.email;
          const role = "bayer";
            storeGoogleUserInfo(name,email,role)
            setuseremail(email)
        })
        .catch(error =>{
            setLoginError(error.message)
        })
    }


    const storeGoogleUserInfo = (name, email,role) =>{
        const deta = {name,email,role};
        fetch(`http://localhost:5000/users`,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(deta)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate(from, { replace: true });
        })
    }

    return (
        <div className='my-10 flex justify-center items-center'>
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-pink-50 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-light text-gray-700 sm:text-2xl dark:text-white">
                Login To Your Account
            </div>
            <div className="mt-8">
            <form onSubmit={handleSubmit(handlLogin)} autoComplete="off">
            <div className="flex flex-col mb-2">
                    <div className="form-control flex relative">
                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <HiOutlineMail></HiOutlineMail>
                        </span>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })} id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/>
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
            </div>
                <div className="flex flex-col mb-6">
                        <div className="form-control flex relative">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <RiLockPasswordLine></RiLockPasswordLine>
                            </span>
                            <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password"/>
                            </div>
                </div>
                    <div className="flex mb-6 ml-auto items-center justify-center">
                        <a href="/" className="inline-flex text-xs font-thin text-gray-700 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                        Forgot Your Password?
                        </a>
                    </div>
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <div className="flex w-full items-center justify-center">
                    <Button color='pink' type='submit'>login</Button>
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </div>
            </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                    <span className="inline-flex items-center text-md font-thin text-center text-gray-700 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                        You don&#x27;t have an account?
                        <Link className='text-secondary underline' to="/signup">Create new Account</Link>
                    </span>
            </div>
            <Button className='mx-auto mt-4' size='sm' color='pink' variant='outlined' onClick={handleGoogleSignin}> Login With Google</Button>
        </div>
        </div>
    );
};

export default Login;