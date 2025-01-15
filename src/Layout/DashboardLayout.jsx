import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar';

const DashboardLayout = () => {
    return (
        <main className=''>
            <Helmet>
                <title>Life Link  | Dashboard</title>
            </Helmet>
            <aside className='md:col-span-2 lg:col-span-3 md:mt-16 fixed '>
             <Sidebar></Sidebar>
            </aside>
            <section className='md:col-span-10 lg:col-span-9 md:ml-56 lg:ml-72 lg:w-full'>
             <Outlet></Outlet>
            </section>
        </main>

    );
};

export default DashboardLayout;