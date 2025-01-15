import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardHook = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/dashboard"); // Navigate to the route
        window.location.reload();   // Force page reload
    };

    return (
        <p onClick={handleNavigate}>
            Dashboard
        </p>
    );
};

export default DashboardHook;
