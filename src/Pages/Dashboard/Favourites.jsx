import React from 'react';
import useBioDetails from '../../Hooks/useBioDetails';
import { MdDelete, } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
const Favourites = () => {
    const [BioDetails, refetch] = useBioDetails();

    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
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
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
                Favourites: {BioDetails.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Biodata Id</th>
                            <th className="px-4 py-2">Permanent Address</th>
                            <th className="px-4 py-2">Occupation</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BioDetails.map((bio) => (
                            <tr key={bio._id} className="hover:bg-gray-100">
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
                                    >
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Favourites;
