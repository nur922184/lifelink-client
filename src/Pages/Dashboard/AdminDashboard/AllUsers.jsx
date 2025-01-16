import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Shared/Loading/Loading';
import { MdDelete } from 'react-icons/md';
import { FaUser, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    // Fetch users with React Query
    const { data: users = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleUserDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`) // Using specific user ID
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch(); // Refetch data to update the UI
                            Swal.fire({
                                title: "Deleted!",
                                text: "The user has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch((err) => {
                        console.error("Error deleting user:", err);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong while deleting the user.",
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
                        <th className="border px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} className="text-center">
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">
                                {user.role === 'admin' ? (
                                    <button className="text-white px-3 py-1 rounded bg-blue-600">
                                        {/* Admin Icon */}
                                        <FaUser size={18} />
                                    </button>
                                ) : user.role === 'premium' ? (
                                    <button className="text-white px-3 py-1 rounded bg-yellow-500">
                                        {/* Premium Icon */}
                                        <FaUsers size={18} />
                                    </button>
                                ) : (
                                    <button className="text-white px-3 py-1 rounded bg-gray-500">
                                        {/* Normal User Icon */}
                                        <FaUser size={18} />
                                    </button>
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleUserDelete(user._id)} // Correct usage of user._id
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                >
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
