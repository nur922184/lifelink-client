import React, { useEffect, useState } from "react";
import NoFound from "../UsesDashboard/NoFound";
const ApprovedPremium = () => {
    const [payments, setPayments] = useState([]);

    // Fetch all payments from the backend
    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch("http://localhost:5000/payments"); // Backend API endpoint
                const data = await response.json();
                setPayments(data);
            } catch (error) {
                console.error("Failed to fetch payments:", error);
            }
        };

        fetchPayments();
    }, []);


    return (
        <div className="container h-screen mx-auto dark:bg-slate-900 p-5">
            <h1 className="text-2xl font-bold mb-4 text-center">Approved Premium Data</h1>

            {payments.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-200 w-full">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-slate-800">
                                <th className="border px-4 py-2">Name</th>
                                <th className="border px-4 py-2">Id</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment) => (
                                <tr key={payment._id}>
                                    <td className="border px-4 py-2">{payment.name}</td>
                                    <td className="border px-4 py-2">{payment.biodataId}</td>
                                    <td className="border px-4 py-2">{payment.postEmail}</td>
                                    <td className="border px-4 py-2">
                                        {payment.status === '' ? (
                                            <p
                                                className="text-red-700 px-4 py-2 rounded"
                                            >
                                               Premium pending
                                            </p>
                                        ) : (
                                            <span className="text-green-600 font-bold">Premium</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <NoFound></NoFound>
            )}
        </div>

    );
};


export default ApprovedPremium;