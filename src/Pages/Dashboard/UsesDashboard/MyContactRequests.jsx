import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import NoFound from "./NoFound";
import Loading from "../../../Shared/Loading/Loading";

const MyContactRequests = () => {
    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();
    const userEmail = user?.email;

    useEffect(() => {
        const fetchPayments = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:5000/payments${userEmail ? `?email=${userEmail}` : ""}`
                );
                const data = await response.json();
                setPayments(data);
            } catch (error) {
                console.error("Failed to fetch payments:", error);
                Swal.fire("Error", "Failed to fetch contact requests. Please try again.", "error");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPayments();
    }, [userEmail]);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/payments/${id}`, {
                        method: "DELETE",
                    });
                    const result = await response.json();

                    if (result.success) {
                        Swal.fire("Deleted!", "Your contact request has been deleted.", "success");
                        setPayments((prevPayments) =>
                            prevPayments.filter((payment) => payment._id !== id)
                        );
                    } else {
                        Swal.fire("Failed!", result.message, "error");
                    }
                } catch (error) {
                    console.error("Error deleting data:", error);
                    Swal.fire("Error!", "Something went wrong.", "error");
                }
            }
        });
    };

    return (
        <div className="container mx-auto h-screen p-5">
            <h1 className="text-2xl font-bold mb-4 text-center">MY Contact Requests</h1>
            {isLoading ? (
               <Loading></Loading>
            ) : payments.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Biodata ID</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Mobile No</th>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((request) => (
                                <tr key={request._id}>
                                    <td className="border border-gray-300 px-4 py-2">{request.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{request.biodataId}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <span
                                            className={`px-2 py-1 rounded text-white ${
                                                request.status === "Premium"
                                                    ? "bg-green-500"
                                                    : "bg-yellow-500"
                                            }`}
                                        >
                                            {request.status || "Pending"}
                                        </span>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {request.status === "Premium" ? request.mobile : "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {request.status === "Premium" ? request.postEmail : "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => handleDelete(request._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <NoFound />
            )}
        </div>
    );
};

export default MyContactRequests;
