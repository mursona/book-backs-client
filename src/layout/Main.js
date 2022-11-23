import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavbarTop from '../pages/Shared/Navbar/NavbarTop';

const Main = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;