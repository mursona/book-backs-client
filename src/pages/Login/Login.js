import { Button, Input } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { myContext } from '../../contextApi/Authcontext';
import useTitle from '../../CustomeHOOk/MakeDynamicTitle/UseTitle';

const Login = () => {

    useTitle('Login')
    const { register, handleSubmit,formState: { errors },} = useForm();
    const [loginError, setLoginError] = useState(''); 
    const {logIn,googleSignin} = useContext(myContext) 
    const negivet = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

 
    const handlLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                
                // fetch jwt
                fetch(`http://localhost:5000/jwt?email=${data.email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.jwtToken) {
                        localStorage.setItem('backToken', data.jwtToken);
                        negivet(from, { replace: true });
                    }
                });


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
          const role = "buyer";
            storeGoogleUserInfo(name,email,role)
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.jwtToken) {
                        localStorage.setItem('backToken', data.jwtToken);
                        negivet(from, { replace: true });
                    }
                });
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
            // negivet(from, { replace: true });
        })
    }

   

    return (
        <div className='my-10 flex justify-center items-center'>
        <div className='flex flex-col w-full max-w-md px-4 py-8 bg-pink-50 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
        <div className="self-center mb-6 text-xl font-light text-gray-700 sm:text-2xl dark:text-white">
                Login
            </div>
            <form onSubmit={handleSubmit(handlLogin)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <Input type="text"
                        {...register("email", {
                            required: "Email Address is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <Input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                <div className='text-center mx-12'>
                <Button type="submit" color='pink' variant='outlined'>
                    Login
                </Button>
                </div>
                <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div>
            </form>
            <div className='text-center my-2'><p>New to here? <Link className='text-secondary underline' to="/signup">Create New Account</Link></p></div>
            <Button onClick={handleGoogleSignin} color='pink' variant='gradient'>Login With Google</Button>
        </div>
    </div>
    );
};

export default Login;