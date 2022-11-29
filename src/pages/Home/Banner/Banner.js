import React from 'react';
import PrimaryButton from '../../../component/Button/PrimaryButton';
import banner from '../../../assets/banner-01.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="grid gap-10 lg:grid-cols-2 mx-auto my-6 max-w-screen-xl py-2 px-4 lg:pt-0 lg:pb-0">
                <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Book Back
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Buy and sell your
              <br className="hidden md:block" />
              books at the{' '}
              <span className="inline-block text-pink-400">
              best price
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            We pride ourselves in being the world‘s largest textbook buyback price comparison tool. In addition to helping you get rid of your old textbooks, we sale second hand/ old books at cheap price.
            </p>
            <div className="flex items-center">
              <Link to='/login'>
              <PrimaryButton className={`h-16 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}>GET STARTED</PrimaryButton>
              </Link>
              <a
                href="/"
                aria-label=""
                className="mx-4 inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:max-w-full xl:px-0">
          <img
            className="py-10 object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none lg:h-full"
            src={banner}
            alt=""/>
        </div>
        </div>
    );
};

export default Banner;