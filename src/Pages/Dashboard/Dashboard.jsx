import React from 'react';
import animation from '../../assets/Images/dashboard.gif'

const Dashboard = () => {

    // import AdminC from '../Pages/Dashboard/DeshBoardComponent/AdminC';

    return (
        <div>
            <div style={{
                backgroundImage: `url(${animation})`,
            }}
                className="flex flex-col md:max-w-[50%] mx-auto bg-cover bg-center items-center justify-center min-h-screen text-center">

            </div>
        </div>
    );
};

export default Dashboard;