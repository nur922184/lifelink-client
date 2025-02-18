import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlinePostAdd } from "react-icons/md";
import Lottie from "lottie-react";
import emptyAnimation from "../../../assets/lotte-json/nodata.json";
import { Link } from "react-router-dom";

const NoFilesFound = () => {
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
                <Link to={'/dashboard/addbiodata'}>
                    <button
                        className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:ring focus:ring-blue-300"
                    >
                        <MdOutlinePostAdd className="mr-2" /> New Bio data
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NoFilesFound;
