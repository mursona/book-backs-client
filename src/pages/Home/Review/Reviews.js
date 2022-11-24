import React from 'react';
import Review from './Review';

const Reviews = () => {

    const reviewData = [
        {
            id: 1,
            auth_name: 'Aauth Jeans',
            auth_img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
            description: 'My favorite parts are the galactic blast game (it is similar to baseball except there are robots playing), recess at Zacks school where everything is 3-D holographic images.',
            review: '⭐⭐⭐⭐⭐'
        },
        {
            id: 2,
            auth_name: 'Paulus Plus',
            auth_img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
            description: 'After you have searched your ISBN, we display a list of companies with offers for your book. BookScouter users can rate and review each vendor with our feedback system.',
            review: '⭐⭐⭐⭐⭐'
        },
        {
            id: 3,
            auth_name: 'John Linkon',
            auth_img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
            description: 'I liked this book. People who are interested in national disasters and US history as well as immigration will most probably be interested in reading this book.',
            review: '⭐⭐⭐⭐⭐'
        },
    ]

    return (
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="max-w-lg mb-5 font-sans text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none  leading-none md:mx-auto">
            <span className="relative inline-block">Read trusted
                    <span className="relative text-pink-600"> reviews</span>
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 -right-32 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                    from our customers Services
            </h2>
            <div className='grid gap-8 row-gap-8 lg:grid-cols-3'>
                {
                    reviewData.map(reviews => <Review
                    key={reviews.id}
                    reviews={reviews}
                    ></Review>)
                }
            </div>
        </div>   
        
    );
};

export default Reviews;