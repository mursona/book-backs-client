import React from 'react';

const Review = ({reviews}) => {

  const {auth_name, auth_img, description, review} = reviews;

    return (
          <div className="swiper-slide">
            <blockquote className="rounded-lg bg-gray-100 p-8">
                  <div className="flex items-center">
                    <img alt="Man" src={auth_img} className="h-16 w-16 rounded-full object-cover"/>
                    <div className="ml-4">
                      <div className="flex justify-center gap-0.5 text-amber-500">
                        {review}
                      </div>
                      <p className="mt-1 text-lg font-medium text-gray-700">{auth_name}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500">{description}</p>
            </blockquote>
          </div>
    );
};

export default Review;