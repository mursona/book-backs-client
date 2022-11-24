import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import banner from '../../assets/banner-01.png';

const Banner = () => {
    return (
        <div className="relative flex flex-col-reverse mx-auto my-6 max-w-screen-xl py-2 px-4 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="pl-10 py-10 object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={banner}
            alt=""/>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
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
              <PrimaryButton className={`h-16 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}>GET STARTED</PrimaryButton>
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
        </div>
    );
};

export default Banner;