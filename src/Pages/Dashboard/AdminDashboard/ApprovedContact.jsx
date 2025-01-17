import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ApprovedContact = () => {
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



    const handleApproved = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to approve this payment?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve it!",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/payments/${id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    const data = await response.json();

                    if (data.success) {
                        Swal.fire("Approved!", data.message, "success");
                        // Update the UI after successful approval
                        setPayments((prevPayments) =>
                            prevPayments.map((payment) =>
                                payment._id === id ? { ...payment, status: "Approved" } : payment
                            )
                        );
                    } else {
                        Swal.fire("Failed!", data.message, "error");
                    }
                } catch (error) {
                    console.error("Error approving payment:", error);
                    Swal.fire("Error!", "Something went wrong.", "error");
                }
            }
        });
    };


    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">All Payment Data</h1>

            {payments.length > 0 ? (
                <table className="table-auto border-collapse border border-gray-200 w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Id</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Date</th>
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
                                    {new Date(payment.date).toLocaleDateString()}
                                </td>
                                <td className="border px-4 py-2">
                                    {payment.status === "pending" ? (
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => handleApproved(payment._id)}
                                        >
                                            Approve
                                        </button>
                                    ) : (
                                        <span className="text-green-600 font-bold">Approved</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No payment data available.</p>
            )}
        </div>
    );
};


export default ApprovedContact;