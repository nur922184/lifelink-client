import { useEffect, useState } from "react";

const useDashboardData = () => {
    const [dashboardData, setDashboardData] = useState({
        totalBiodataCount: 0,
        maleBiodataCount: 0,
        femaleBiodataCount: 0,
        premiumBiodataCount: 0,
        totalRevenue: 0,
    });

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await fetch("http://localhost:5000/dashboard");
                if (!response.ok) {
                    throw new Error("Failed to fetch dashboard data");
                }
                const data = await response.json();
                setDashboardData(data);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return { dashboardData, isLoading, error };
};

export default useDashboardData;
