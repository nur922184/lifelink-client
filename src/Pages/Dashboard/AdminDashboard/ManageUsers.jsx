import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Shared/Loading/Loading';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    // Fetch users with React Query
    const { data: users = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    refetch(); // Refetch users to update UI
                    Swal.fire({
                        title: "Success!",
                        text: "The user has been granted admin privileges.",
                        icon: "success"
                    });
                }
            })
            .catch((err) => {
                console.error("Error updating admin role:", err);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update admin role.",
                    icon: "error"
                });
            });
    };

    const handleMakePremium = (id) => {
        axiosSecure.patch(`/users/premium/${id}`)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    refetch(); // Refetch users to update UI
                    Swal.fire({
                        title: "Success!",
                        text: "The user has been granted premium privileges.",
                        icon: "success"
                    });
                }
            })
            .catch((err) => {
                console.error("Error updating premium role:", err);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update premium role.",
                    icon: "error"
                });
            });
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (isError) {
        return <p>Failed to load users. Please try again later.</p>;
    }

    return (
        <div className="p-4">
            <div className="flex justify-evenly my-4">
                <h2 className="text-2xl font-bold">All Users: {users.length}</h2>
                <h2 className="text-2xl font-bold">Manage Your Users</h2>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} className="text-center">
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">
                                {user.role ? (
                                    <span className="text-white px-3 py-1 rounded bg-gray-500">
                                        {/* Display the user's role */}
                                        {user.role === 'admin' && 'Admin'}
                                        {user.role === 'premium' && 'Premium'}
                                        {user.role === 'user' && 'User'}
                                    </span>
                                ) : (
                                    <div>
                                        {/* Display Make Admin and Make Premium buttons */}
                                        <button
                                            onClick={() => handleMakeAdmin(user._id)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                                        >
                                            Make Admin
                                        </button>
                                        <button
                                            onClick={() => handleMakePremium(user._id)}
                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                        >
                                            Make Premium
                                        </button>
                                    </div>
                                )}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
