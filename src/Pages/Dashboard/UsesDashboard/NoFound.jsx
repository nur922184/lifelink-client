import React from "react";
import { FiSearch } from "react-icons/fi";
import Lottie from "lottie-react";
import emptyAnimation from "../../../assets/lotte-json/nodata.json";

const NoFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 mb-5">
            <div className="w-40 h-40">
                {/* Lottie Animation */}
                <Lottie animationData={emptyAnimation} loop={true} />
            </div>
          
            <p className="mt-16 text-gray-600 ">
                Your search <span className="font-bold">"wireframe kit"</span> did not match any projects. Please try again.
            </p>

            <div className="mt-6 flex space-x-4">
                <button
                    className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-400"
                >
                    <FiSearch className="mr-2" /> Clear search
                </button>
            </div>
        </div>
    );
};

export default NoFound;
