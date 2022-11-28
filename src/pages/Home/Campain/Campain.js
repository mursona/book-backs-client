
import { useQuery } from '@tanstack/react-query';
import React from "react";
// import React, { useContext } from 'react';
// import { myContext } from '../../../contextApi/Authcontext';

const Campain = () => {
// const {user} = useContext(myContext)

const {data:campain =[] , isLoading} = useQuery({
queryKey : ['campain'],
queryFn : async ()=>{
    const res = await fetch(`http://localhost:5000/campain`);
    const data = res.json()
    return data
}
})

if(isLoading){
    return <p>loadding....</p>
}
    return (
        <div>
            <p>Campain Length: {campain.length} </p>
        </div>
    );
};

export default Campain;