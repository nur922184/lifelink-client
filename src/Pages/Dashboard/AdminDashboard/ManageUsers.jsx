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
        if (!id) {
            Swal.fire({
                title: "Error!",
                text: "Invalid user ID.",
                icon: "error",
            });
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to grant admin privileges to this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
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
            }
        });
    };

    const handleMakePremium = (id) => {
        if (!id) {
            Swal.fire({
                title: "Error!",
                text: "Invalid user ID.",
                icon: "error",
            });
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to grant premium privileges to this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make premium!"
        }).then((result) => {
            if (result.isConfirmed) {
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
            }
        });
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (isError) {
        return <p>Failed to load users. Please try again later.</p>;
    }

    return (
        <div className="p-4 ">
            <div className="flex justify-evenly my-4">
                <h2 className="text-2xl font-bold">All Users: {users.length}</h2>
                <h2 className="text-2xl font-bold">Manage Your Users</h2>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
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
                            <td className="border px-4 py-2 flex justify-center items-center">
                                {user.role ? (
                                    <span className="text-white px-3 py-1 rounded bg-gray-500">
                                        {user.role === 'admin' && 'Admin'}
                                        {user.role === 'premium' && 'Premium'}
                                        {user.role === 'user' && 'User'}
                                    </span>
                                ) : (
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => handleMakeAdmin(user._id)}
                                            className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
                                        >
                                            Make Admin
                                        </button>
                                        <button
                                            onClick={() => handleMakePremium(user._id)}
                                            className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
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
