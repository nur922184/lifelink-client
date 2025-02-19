import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import useAuth from "../../../Hooks/useAuth";

const DashboardOverview = () => {
    const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const data = [
    { name: "January", Donations: 5 },
    { name: "February", Donations: 10 },
    { name: "March", Donations: 8 },
    { name: "April", Donations: 12 },
  ];

  return (
    <div className={`p-6 py-16 min-h-screen ${darkMode ? "bg-gray-900" : " text-gray-900"}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-600">Welcome, {user.displayName}!</h2>
        <button 
          onClick={toggleDarkMode} 
          className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700"
        >
          Toggle Dark Mode
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-purple-100 dark:bg-purple-800 rounded shadow-md text-center">
          <h3 className="text-lg font-semibold">Total Donations</h3>
          <p className="text-2xl font-bold">{user.totalDonations}</p>
        </div>
        <div className="p-4 bg-blue-100 dark:bg-blue-800 rounded shadow-md text-center">
          <h3 className="text-lg font-semibold">Registered Events</h3>
          <p className="text-2xl font-bold">{user.registeredEvents}</p>
        </div>
        <div className="p-4 bg-green-100 dark:bg-green-800 rounded shadow-md text-center">
          <h3 className="text-lg font-semibold">Wishlist Items</h3>
          <p className="text-2xl font-bold">{user.wishlistCount}</p>
        </div>
      </div>
      
      <div className="mt-10 dark:bg-gray-800 p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold text-purple-600 mb-4">Donation Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke={darkMode ? "#fff" : "#000"} />
            <YAxis stroke={darkMode ? "#fff" : "#000"} />
            <Tooltip wrapperStyle={{ backgroundColor: darkMode ? "#333" : "#fff" }} />
            <Bar dataKey="Donations" fill="#6b46c1" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardOverview;
