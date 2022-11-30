
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { myContext } from '../../../contextApi/Authcontext';
import CampainCard from './CampainCard';
import { MdOutlineCampaign } from 'react-icons/md';

const Campain = () => {
const {user} = useContext(myContext);

const {data:campain =[] , isLoading} = useQuery({
queryKey : ['campain'],
queryFn : async ()=>{
    const res = await fetch(`https://book-back-server.vercel.app/campaign`);
    const data = res.json()
    return data
}
})
console.log(campain)

if(isLoading){
    return <div className='w-10 h-10 border-8 text-7xl text-center border-dashed rounded-full animate-spin mt-5 border-pink-600'></div>;
}
    return (
       <>
       
       {
        campain.length &&
        
        <>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="max-w-lg mb-5 font-sans text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none  leading-none md:mx-auto">
            <span className="relative inline-block"><MdOutlineCampaign></MdOutlineCampaign>
                    <span className="relative text-amber-600"> Campaign</span>
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-8 -right-32 z-0 hidden w-40 -mt-6 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                        <defs>
                        <pattern id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69" x="0" y="0" width=".135" height=".30">
                        <circle cx="1" cy="1" r=".7" />
                        </pattern>
                        </defs>
                        <rect
                        fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                        width="50"
                        height="22"
                        />
                    </svg>
                    </span><br />
                    Our Recent Book Resale
            </h2>
        <div className='grid gap-4 row-gap-8 lg:grid-cols-2 mt-16'>
        {
             campain.map((campcard)=> <CampainCard key={campcard._id} campcard ={campcard}></CampainCard>)
         }
        </div>
     </div>
        </>
       }
       </>
    );
};

export default Campain;