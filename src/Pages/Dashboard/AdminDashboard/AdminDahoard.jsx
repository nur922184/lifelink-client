import React, { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";
import CustomPieChart from "./CustomPieChart";


const AdminDahoard = () => {

    return (
        <div className="dashboard ">
            <DashboardCard></DashboardCard>
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center my-4">Dashboard Statistics</h2>
                <CustomPieChart />
            </div>

        </div>
    );
};

export default AdminDahoard;
