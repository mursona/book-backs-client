import React from 'react';
import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/Button/PrimaryButton'
import error from '../../assets/404-01.png' 

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
              <span className='sr-only'>Error</span>
              <div className='flex justify-center items-center h-full'>
                <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-800 to-pink-200'>4</h1>
                <img className='w-24 h-24 mt-3' src={error} alt="" />
                <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-800 to-pink-200'>4</h1>
              </div>
            </h2>
            <p className='text-2xl font-semibold md:text-3xl mb-8'>
              Oopsie! something missing ...
            </p>
            <Link to='/'>
              <PrimaryButton classes='px-8 py-3 font-semibold rounded'>
                Back to Homepage
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;