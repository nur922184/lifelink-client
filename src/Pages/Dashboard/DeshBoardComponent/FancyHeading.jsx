import React from "react";
import useAuth from "../../../Hooks/useAuth";

const FancyHeading = () => {
    const { user } = useAuth();
    return (
        <div className="text-center w-full">
            {/* Top Border */}
            <div className="h-1 bg-purple-500 w-full mb-2"></div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-900">My Dashboard</h2>

            {/* Bottom Border */}
            <p className="text-gray-600 mt-2">
                {user.displayName}
            </p>
            <div className="h-1 bg-purple-500 w-full mt-2"></div>

            {/* Subtitle */}
        </div>
    );
};

export default FancyHeading;
