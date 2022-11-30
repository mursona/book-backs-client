
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../contextApi/Authcontext';
const PrivetRouting = ({children}) => {
    const {user, loading} = useContext(myContext);
    const location = useLocation();

    if(loading){
        return <div className='w-10 h-10 border-8 text-7xl text-center border-dashed rounded-full animate-spin mt-5 border-pink-600'></div>
    }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivetRouting;