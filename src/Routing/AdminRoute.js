
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../contextApi/Authcontext';
import useAdminHook from '../CustomeHOOk/MakeAdmin/useAdminHook';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(myContext);
    const location = useLocation();
    const [admin, adminLoading] = useAdminHook(user?.email)

    if(loading || adminLoading){
        return <div className='w-10 h-10 border-8 text-7xl text-center border-dashed rounded-full animate-spin mt-5 border-pink-600'></div>
    }

    if (user && admin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;