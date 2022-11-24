import React from 'react';
import { Avatar } from "@material-tailwind/react";

const BookCategory = ({category}) => {
    const {name, description, icon} = category;
    return (
          <div className="sm:text-center rounded-lg bg-gray-50 shadow-xl pb-6 mx-4 px-4">
            <Avatar src={icon} alt="avatar" size="xxl" />
            <h6 className="mb-2 font-semibold leading-5">{name}</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                {description}
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
    );
};

export default BookCategory;