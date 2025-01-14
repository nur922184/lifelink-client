import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';


const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('signin') || location.pathname.includes('signup')
    return (
        <div className='dark:bg-gray-900'>
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           { noHeaderFooter || <Footer></Footer>}
            {/* <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer> */}

        </div>
    );
};

export default MainLayout;