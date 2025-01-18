import React from 'react';
import animation from '../../assets/Images/dashboard.gif'

const Dashboard = () => {

    // import AdminC from '../Pages/Dashboard/DeshBoardComponent/AdminC';

    return (
        <div>
            <h2 className='text-center text-2xl py-8 text-teal-800 font-bold'>Welcome Your Dashboard </h2>
            <div style={{
                backgroundImage: `url(${animation})`,
            }}
                className="flex flex-col md:max-w-[50%] mx-auto bg-cover bg-center items-center justify-center min-h-screen text-center">

            </div>
        </div>
    );
};

export default Dashboard;