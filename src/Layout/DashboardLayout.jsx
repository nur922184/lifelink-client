import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar';

// import AdminC from '../Pages/Dashboard/DeshBoardComponent/AdminC';

const DashboardLayout = () => {
  
    return (
        <main className='dark:bg-gray-900 dark:text-white max-w-full mx-auto'>
            <Helmet>
                <title>Life Link  | Dashboard</title>
            </Helmet>
            <aside className='md:col-span-2 lg:col-span-3 md:mt-16 fixed '>
                <Sidebar></Sidebar>
                {/* <AdminC></AdminC> */}
            </aside>
            <section className='md:col-span-10 lg:col-span-9 md:ml-56 lg:ml-72'>
                <Outlet></Outlet>
            </section>
        </main>

    );
};

export default DashboardLayout;