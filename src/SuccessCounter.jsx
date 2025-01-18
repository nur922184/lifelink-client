import React, { useEffect, useState } from 'react';

const SuccessCounter = () => {
  const [stats, setStats] = useState({
    totalBiodata: 0,
    boysBiodata: 0,
    girlsBiodata: 0,
    successfulMarriages: 0,
  });

  // Fetch statistics from the backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/stats'); // Replace with your API endpoint
        const data = await response.json();
        setStats({
          totalBiodata: data.totalBiodata || 0,
          boysBiodata: data.boysBiodata || 0,
          girlsBiodata: data.girlsBiodata || 0,
          successfulMarriages: data.successfulMarriages || 0,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-cyan-50 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-slate-50 mb-8">Our Achievements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Total Biodata */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-indigo-600">{stats.totalBiodata}</h3>
            <p className="text-gray-700 mt-2">Total Biodata</p>
          </div>

          {/* Boys Biodata */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-blue-600">{stats.boysBiodata}</h3>
            <p className="text-gray-700 mt-2">Boys' Biodata</p>
          </div>

          {/* Girls Biodata */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-pink-600">{stats.girlsBiodata}</h3>
            <p className="text-gray-700 mt-2">Girls' Biodata</p>
          </div>

          {/* Successful Marriages */}
          <div className="bg-white dark:bg-slate-800  shadow-lg p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-green-600">{stats.successfulMarriages}</h3>
            <p className="text-gray-700 mt-2">Successful Marriages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
