import { useState, useEffect } from "react";
import {Navbar, MobileNav, Typography, Button, IconButton} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const NavbarTop = () => {

    const [openNav, setOpenNav] = useState(false);
 
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);
   

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to='/' className="flex items-center">Home</Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to='/' className="flex items-center">About</Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to='/booking' className="flex items-center">
              Blog
            </Link>
          </Typography>
        </ul>
      );

    return (

        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
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
          <div className="hidden lg:block">{navList}</div>
          <PrimaryButton className={`hidden lg:inline-block`}><Link to='/login'>Login</Link></PrimaryButton>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button ripple={true} variant="gradient" color="pink" size="sm" fullWidth className="mb-2">
            <span>Login</span>
          </Button>
        </MobileNav>
      </Navbar>
    );
};
export default NavbarTop;