import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useDashboardData from '../../../Hooks/useDashboardData';
import Loading from '../../../Shared/Loading/Loading';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2'];

const CustomPieChart = () => {
  const { dashboardData, loading, error } = useDashboardData();

  if (loading) {
    return <div><Loading></Loading></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const data = [
    { name: 'Total Biodata', value: dashboardData.totalBiodataCount },
    { name: 'Male Biodata', value: dashboardData.maleBiodataCount },
    { name: 'Female Biodata', value: dashboardData.femaleBiodataCount },
    { name: 'Premium Biodata', value: dashboardData.premiumBiodataCount },
    { name: 'Total Revenue (in 100s)', value: dashboardData.totalRevenue / 100 }, // Scaling revenue for better visuals
  ];

  return (
    <div className="w-full h-64 md:h-96">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius="70%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
