import React, { useEffect, useState } from "react";
import axios from "axios";

const MyContactRequests = () => {
  const [contactRequests, setContactRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch contact requests on component mount
  useEffect(() => {
    const fetchContactRequests = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Adjust based on your token storage
        const response = await axios.get("http://localhost:5000/contact-requests", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContactRequests(response.data);
      } catch (error) {
        console.error("Error fetching contact requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactRequests();
  }, []);

  // Handle delete request
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact request?")) {
      try {
        const token = localStorage.getItem("accessToken");
        await axios.delete(`http://localhost:5000/contact-requests/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContactRequests((prev) => prev.filter((request) => request._id !== id));
        alert("Contact request deleted successfully!");
      } catch (error) {
        console.error("Error deleting contact request:", error);
        alert("Failed to delete contact request.");
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">My Contact Requests</h1>
      {contactRequests.length === 0 ? (
        <p>No contact requests found.</p>
      ) : (
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
            {contactRequests.map((request) => (
              <tr key={request._id}>
                <td className="border border-gray-300 px-4 py-2">{request.name}</td>
                <td className="border border-gray-300 px-4 py-2">{request.biodataId}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      request.status === "Approved"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {request.status === "Approved" ? request.mobileNo : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {request.status === "Approved" ? request.email : "N/A"}
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
      )}
    </div>
  );
};

export default MyContactRequests;
