import { GiLifeSupport } from "react-icons/gi";
import useDashboardData from "../../Hooks/useDashboardData";
import { FaUsers, FaMale, FaFemale, FaCrown, FaDollarSign } from "react-icons/fa";
const SuccessCounter = () => {
  const { dashboardData, } = useDashboardData();
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-cyan-50 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-slate-50 mb-8">Our Achievements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Total Biodata */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-indigo-600">{dashboardData.totalBiodataCount}</h3>
            <div className="flex justify-center -mt-9 absolute">
              <div className="bg-purple-800 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
                <FaUsers className=""></FaUsers>
              </div>
            </div>
            <p className="text-gray-700 mt-2 dark:text-white ">Total Biodata</p>
          </div>
          {/* Boys Biodata */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-purple-600">{dashboardData.maleBiodataCount}</h3>
            <div className="flex justify-center -mt-9 absolute">
              <div className="bg-purple-800 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
                <FaMale className=""></FaMale>
              </div>
            </div>
            <p className="text-gray-700  dark:text-white mt-2  "> Boys' Biodata</p>
          </div>

          {/* Girls Biodata */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-pink-600">{dashboardData.femaleBiodataCount}</h3>
            <div className="flex justify-center -mt-9 absolute">
              <div className="bg-purple-800 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
                <FaFemale className=""></FaFemale>
              </div>
            </div>
            <p className="text-gray-700 mt-2 dark:text-white ">Girls' Biodata</p>
          </div>

          {/* Successful Marriages */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-green-600">3</h3>
            <div className="flex justify-center -mt-10 absolute">
              <div className="bg-purple-800 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
              <GiLifeSupport />
              </div>
            </div>
            <p className="text-gray-700 mt-2 dark:text-white ">Successful Marriages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
