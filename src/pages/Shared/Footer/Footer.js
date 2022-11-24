import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-pink-50">
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-3/5">
                        <div className="px-6">
                        <span>
                        <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-900 to-pink-500">BOOK|<small className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-900 to-pink-500">BACK</small></h1>
                        </span>

                            <p className="max-w-sm mt-2 text-gray-700 dark:text-gray-400">Join 31,000+ other and never miss out on new books, resales</p>

                            <div className="flex mt-6 -mx-2">
                                <a href='/'
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Reddit">
                                    <FaFacebookSquare className='text-indigo-900'></FaFacebookSquare>
                                </a>
                            
                                <a href='/'
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Facebook">
                                    <FaTwitterSquare className='text-indigo-900'></FaTwitterSquare>
                                </a>
                            
                                <a href='/'
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Github">
                                    <FaInstagramSquare className='text-indigo-900'></FaInstagramSquare>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

                            <div>
                                <h3 className="text-pink-700 font-semibold uppercase dark:text-white">Blog</h3>
                                <a href='/' className="block mt-2 text-sm text-gray-700 dark:text-gray-400 hover:underline">About Us</a>
                                <a href='/' className="block mt-2 text-sm text-gray-700 dark:text-gray-400 hover:underline">Career</a>
                                <a href='/' className="block mt-2 text-sm text-gray-700 dark:text-gray-400 hover:underline">News</a>
                            </div>

                            <div>
                                <h3 className="text-pink-700 font-semibold uppercase dark:text-white">Products</h3>
                                <a href='/' className="block mt-2 text-sm text-gray-700 dark:text-gray-400 hover:underline">Book HSC</a>
                                <a href='/' className="block mt-2 text-sm text-gray-700 dark:text-gray-400 hover:underline">Book SSC</a>
                                <a href='/' className="block mt-2 text-sm text-gray-700 dark:text-gray-400 hover:underline">Book GRE</a>
                            </div>

                            <div>
                                <h3 className="text-pink-700 font-semibold uppercase dark:text-white">Contact</h3>
                                <span className="block mt-2 text-sm text-gray-700 dark:text-gray-400 hover:underline">+1 527 754 8975</span>
                                <span className="block mt-2 text-sm text-gray-700 dark:text-gray-400 hover:underline">book.back@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>

                <div>
                    <p className="text-center text-gray-700 dark:text-gray-400">© Book Back 2022 - All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;