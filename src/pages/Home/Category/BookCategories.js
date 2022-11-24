import React from 'react';
import BookCategory from './BookCategory';
import category1 from '../../../assets/ssc-03.png';
import category2 from '../../../assets/hsc-01.png';
import category3 from '../../../assets/gre-02.png';

const BookCategories = () => {
    const categoryData = [
        {
            id: 1,
            name: 'Secondary',
            description: 'In this category we resale Secondary School old books',
            icon: category1
        },
        {
            id: 2,
            name: 'Higher Secondary',
            description: 'In this category we resale Higher Secondary School old books',
            icon: category2
        },
        {
            id: 3,
            name: 'Graduate Record',
            description: 'In this category we resale HGraduate Record examination old books',
            icon: category3
        },
    ]

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none  leading-none md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
              <span className="relative text-amber-400">Our</span>
            </span> category
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Search our BUY section to compare textbook prices from more than 25 bookstores. Once you’ve found the lowest price, you’ll be able to purchase the textbooks for the most affordable price.
          </p>
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
            {
                categoryData.map(category => <BookCategory
                    key={category.id}
                    category={category}
                >
                </BookCategory>)
            }
        </div>
    </div>
    );
};

export default BookCategories;