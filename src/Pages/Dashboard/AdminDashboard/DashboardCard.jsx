import React from "react";
import { FaUsers, FaMale, FaFemale, FaCrown, FaDollarSign } from "react-icons/fa";
import useDashboardData from "../../../Hooks/useDashboardData";
import Loading from "../../../Shared/Loading/Loading";

const DashboardCard = () => {
    const { dashboardData, isLoading, error } = useDashboardData();

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 md:p-6">
        {/* Total Biodata Count */}
        <div className="bg-purple-500 text-center text-white p-2 h-40 rounded-lg shadow-lg">
          <FaUsers className="text-3xl sm:text-4xl mb-1 sm:mb-2" />
          <h2 className="text-base sm:text-xl font-bold">Total Biodata</h2>
          <p className="text-xl sm:text-2xl mt-1 sm:mt-2">{dashboardData.totalBiodataCount}</p>
          <p className="mt-1 text-sm sm:text-base">Present count: 75%</p>
        </div>
      
        {/* Male Biodata Count */}
        <div className="bg-blue-500 text-center text-white p-2 h-40 rounded-lg shadow-lg">
          <FaMale className="text-3xl sm:text-4xl mb-1 sm:mb-2" />
          <h2 className="text-base sm:text-xl font-bold">Male Biodata</h2>
          <p className="text-xl sm:text-2xl mt-1 sm:mt-2">{dashboardData.maleBiodataCount}</p>
          <p className="mt-1 text-sm sm:text-base">Present count: 58%</p>
        </div>
      
        {/* Female Biodata Count */}
        <div className="bg-pink-500 text-center text-white p-2 h-40 rounded-lg shadow-lg">
          <FaFemale className="text-3xl sm:text-4xl mb-1 sm:mb-2" />
          <h2 className="text-base sm:text-xl font-bold">Female Biodata</h2>
          <p className="text-xl sm:text-2xl mt-1 sm:mt-2">{dashboardData.femaleBiodataCount}</p>
          <p className="mt-1 text-sm sm:text-base">Present count: 42%</p>
        </div>
      
        {/* Premium Biodata Count */}
        <div className="bg-yellow-500 text-center text-white p-2 h-40 rounded-lg shadow-lg">
          <FaCrown className="text-3xl sm:text-4xl mb-1 sm:mb-2" />
          <h2 className="text-sm sm:text-xl font-bold">Premium Biodata</h2>
          <p className="text-xl sm:text-2xl mt-1 sm:mt-2">{dashboardData.premiumBiodataCount}</p>
          <p className="mt-1 text-sm sm:text-base">Present count: 25%</p>
        </div>
      
        {/* Total Revenue */}
        <div className="bg-green-500 text-center text-white p-2 h-40 rounded-lg shadow-lg">
          <FaDollarSign className="text-3xl sm:text-4xl mb-1 sm:mb-2" />
          <h2 className="text-base sm:text-xl font-bold">Total Revenue</h2>
          <p className="text-xl sm:text-2xl mt-1 sm:mt-2">${dashboardData.totalRevenue}</p>
          <p className="mt-1 text-sm sm:text-base">This Month: $2,500</p>
        </div>
      </div>
      
    );
};

export default DashboardCard;
