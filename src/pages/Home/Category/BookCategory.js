import React from 'react';
import { Avatar } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const BookCategory = ({category}) => {
    const {category_id, name, overview, image} = category;
    return (
          <div className="sm:text-center rounded-lg bg-gray-50 shadow-xl pb-6 mx-4 px-4">
            <Avatar src={image} alt="avatar" size="xxl" />
            <h6 className="mb-2 font-semibold leading-5">{name}</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                {overview}
            </p>
            <Link to={`/category/${category_id}`} className="border-2 border-pink-200 rounded-md px-4 inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >See The Category</Link>
          </div>
    );
};

export default BookCategory;