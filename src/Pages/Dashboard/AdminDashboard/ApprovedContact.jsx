import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import NoFound from "../UsesDashboard/NoFound";
import Loading from "../../../Shared/Loading/Loading";

const ApprovedContact = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // লোডিং স্টেট

  // Fetch all payments from the backend
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch("http://localhost:5000/payments"); // Backend API endpoint
        const data = await response.json();
        setPayments(data);
      } catch (error) {
        console.error("Failed to fetch payments:", error);
      } finally {
        setIsLoading(false); // ডেটা লোড শেষ হলে লোডিং বন্ধ হবে
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
            body: JSON.stringify({ status: "Premium" }),
          });

          const data = await response.json();

          if (data.success) {
            // Update the local state immediately
            setPayments((prevPayments) =>
              prevPayments.map((payment) =>
                payment._id === id ? { ...payment, status: "Premium" } : payment
              )
            );

            Swal.fire("Approved!", data.message, "success");
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
    <div className="container  mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Approved Content Request</h1>

      {isLoading ? ( // লোডিং অবস্থায় মেসেজ দেখানো হচ্ছে
       <Loading></Loading>
      ) : payments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border dark:text-white border-gray-200 w-full">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
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
                    {payment.status === "" ? (
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
        </div>
      ) : (
        <NoFound></NoFound>
      )}
    </div>
  );
};

export default ApprovedContact;
