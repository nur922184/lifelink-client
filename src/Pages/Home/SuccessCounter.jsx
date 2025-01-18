import useDashboardData from "../../Hooks/useDashboardData";

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
            <p className="text-gray-700 mt-2">Total Biodata</p>
          </div>

          {/* Boys Biodata */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-blue-600">{dashboardData.maleBiodataCount}</h3>
            <p className="text-gray-700 mt-2">Boys' Biodata</p>
          </div>

          {/* Girls Biodata */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-pink-600">{dashboardData.femaleBiodataCount}</h3>
            <p className="text-gray-700 mt-2">Girls' Biodata</p>
          </div>

          {/* Successful Marriages */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-green-600">3</h3>
            <p className="text-gray-700 mt-2">Successful Marriages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
