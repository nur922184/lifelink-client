import React, { useState } from 'react';
import useBioDetails from '../../Hooks/useBioDetails';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loading from '../../Shared/Loading/Loading';

const Favourites = () => {
    const [BioDetails, refetch, isLoading] = useBioDetails();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
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
                axiosSecure.delete(`/favorites/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your favourite has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong. Please try again.",
                            icon: "error"
                        });
                        console.error("Delete error:", error);
                    });
            }
        });
    };

    if (isLoading) {
        return (
           <Loading></Loading>
        );
    }

    return (
        <div className="p-6 h-screen">
            <h2 className="text-2xl font-bold text-center mb-4">
                Favourites: {BioDetails.length}
            </h2>

            {BioDetails.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-slate-600 dark:text-white text-left">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Biodata Id</th>
                                <th className="px-4 py-2">Permanent Address</th>
                                <th className="px-4 py-2">Occupation</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody className='mb-3'>
                            {BioDetails.map((bio, index) => (
                                <tr
                                    key={bio._id}
                                    className={`${index % 2 === 0
                                            ? "bg-gray-100 dark:bg-gray-700"
                                            : "bg-white dark:bg-gray-800"
                                        }`}
                                >
                                    <td className="border px-4 py-2">{bio.name}</td>
                                    <td className="border px-4 py-2">{bio.biodataId}</td>
                                    <td className="border px-4 py-2">
                                        {bio.permanentDivision}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {bio.occupation}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            onClick={() => handleDelete(bio._id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                            aria-label={`Delete ${bio.name}`}
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <p className="text-gray-600 dark:text-gray-300 text-xl">
                        No favourites added yet.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Favourites;
