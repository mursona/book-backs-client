import { useState } from "react";
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from "../../../contextApi/Authcontext";
import {Navbar, Typography} from "@material-tailwind/react";
import { BiUser } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PrimaryButton from "../../../components/Button/PrimaryButton";

const NavbarTop = () => {

  const { user ,logOut} = useContext(authContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-1">
      <div className='className="container mx-auto flex items-center justify-between text-blue-gray-900"'>
      <Typography
            as="a"
            href='/'
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <span>
              <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-900 to-pink-500">BOOK|<small className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-900 to-pink-500">BACK</small></h1>
            </span>
          </Typography>
          {user?.email ? (
            <>
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to='/blog' className="flex items-center">
              Blog
            </Link>
           </Typography>
              <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
              >
              <Link to='/booking' className="flex items-center">buy</Link>
              </Typography>
              </ul>
              <div className='relative inline-block '>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className='relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none'
                >
                <BsThreeDotsVertical></BsThreeDotsVertical>
                </button>
                {isDropdownOpen && (
                  <div>
                  <div className='absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl '>
                    <Link
                      to='/Dashboard'
                      className='flex items-center px-3 py-3 text-md text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '
                    >
                    <BiUser></BiUser>

                      <span className='mx-1'>Dashboard</span>
                    </Link>

                    <hr className='border-gray-200' />
                    <div onClick={logOut} className='flex items-center cursor-pointer p-3 text-md text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100'>
                      <AiOutlineLogout></AiOutlineLogout>
                      <Link className='mx-1'>Sign Out</Link>
                    </div>
                  </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal">
              <Link to='/' className="flex items-center">
                Home
              </Link>
              </Typography>
              <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal">
              <Link to='/blog' className="flex items-center">
                Blog
              </Link>
              </Typography>
              </ul>
              <Link to='/signup' className='mr-5'>
                <PrimaryButton classes='rounded-md px-2 py-1'>
                  Signup
                </PrimaryButton>
              </Link>
            </>
          )}
        </div>
        </Navbar>

  )
}

export default NavbarTop;