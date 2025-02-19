import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import NoFound from './NoFound';
import Loading from '../../../Shared/Loading/Loading';
import { FaEdit } from 'react-icons/fa';

const EditBiodaata = () => {
    const { user } = useAuth(); // `user` থেকে email পাওয়া যাচ্ছে।
    const [biodata, setBiodata] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        if (user?.email) {
            // সার্ভার থেকে ফিল্টার করা ডাটা ফেচ করুন
            setLoading(true); // Set loading to true before the fetch
            axios
                .get(`https://final-project-server-tau-jade.vercel.app/biodata?email=${user.email}`)
                .then(response => {
                    setBiodata(response.data);
                    setLoading(false); // Set loading to false after data is fetched
                })
                .catch(error => {
                    console.error('Error fetching biodata:', error);
                    setLoading(false); // Set loading to false in case of an error
                });
        }
    }, [user?.email]); // যখন `user.email` পরিবর্তন হবে তখন পুনরায় কল করবে।

    return (
        <div className="container mx-auto p-5 bg-white dark:bg-gray-900">
            {loading ? ( // Show loading indicator while fetching
                <Loading></Loading>
            ) : biodata.length > 0 ? (
                <ul>
                    {biodata.map((bio, index) => (
                        <li
                            key={index}
                            className="shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                        >
                            <div className="flex items-center gap-5">
                                {/* Profile Image with Border */}
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full border-4 border-green-500 p-1">
                                        <img
                                            src={bio.profileImage}
                                            alt={bio.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <div className='flex flex-col'>
                                    <div>
                                        <h2 className="text-2xl font-bold">{bio.name}</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-300">{bio.contactEmail}</p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-500 dark:text-gray-300">Profile Completion: <strong>60%</strong></p>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 p-4 sm:p-8 bg-gray-50 dark:bg-gray-700">
                                <div className="flex-grow flex-col w-full sm:w-auto">
                                    <div className='flex flex-row'>

                                        <div className="mt-6">
                                            <h3 className="text-lg font-semibold">Profile Details:</h3>
                                            <ul className="text-sm space-y-1 mt-2">
                                                <li><strong>Occupation:</strong> {bio.occupation}</li>
                                                <li><strong>Age:</strong> {bio.age} years</li>
                                                <li><strong>Height:</strong> {bio.height}</li>
                                                <li><strong>Weight:</strong> {bio.weight}</li>
                                                <li><strong>Race:</strong> {bio.race}</li>
                                                <li><strong>Father's Name:</strong> {bio.fathersName}</li>
                                                <li><strong>Mother's Name:</strong> {bio.mothersName}</li>
                                                <li><strong>Permanent Division:</strong> {bio.permanentDivision}</li>
                                                <li><strong>Present Division:</strong> {bio.presentDivision}</li>
                                                <li><strong>Mobile Number:</strong> {bio.mobileNumber}</li>
                                                <li><strong>Status:</strong> {bio.status}</li>
                                            </ul>
                                        </div>

                                        {/* Partner Expectations */}
                                        <div className="mt-6">
                                            <h3 className="text-lg font-semibold">Partner Expectations:</h3>
                                            <ul className="list-disc list-inside text-sm space-y-1">
                                                <li><strong>Age:</strong> {bio.expectedPartnerAge} years</li>
                                                <li><strong>Height:</strong> {bio.expectedPartnerHeight}</li>
                                                <li><strong>Weight:</strong> {bio.expectedPartnerWeight}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex justify-center sm:justify-start">
                                        <Link to={`/dashboard/edit-profile/${bio._id}`}>
                                            <button
                                                className="btn btn-secondary w-40 bg-purple-600 text-white font-medium py-2 px-4 rounded hover:bg-purple-700"
                                            >
                                                <FaEdit></FaEdit>
                                                Edit
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen">
                    <NoFound></NoFound>
                </div>
            )}
        </div>
    );
};

export default EditBiodaata;
