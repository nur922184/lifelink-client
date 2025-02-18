import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import NoFilesFound from "./NoFilesFound";
import { Link } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const BiodataFetcher = () => {
    const { user } = useAuth(); // `user` থেকে email পাওয়া যাচ্ছে।
    const [biodata, setBiodata] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // লোডিং স্টেট

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`https://final-project-server-tau-jade.vercel.app/biodata?email=${user.email}`)
                .then((response) => {
                    setBiodata(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching biodata:", error);
                })
                .finally(() => {
                    setIsLoading(false); // লোডিং শেষ হলে স্টেট আপডেট
                });
        }
    }, [user?.email]);

    return (
        <div className="container mx-auto p-5 bg-white dark:bg-gray-900 h-screen">
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <p className="text-gray-500 text-lg"><Loading></Loading></p>
                </div>
            ) : biodata.length > 0 ? (
                <ul>
                    {biodata.map((bio, index) => (
                        <li
                            key={index}
                            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 text-gray-800 dark:text-white"
                        >
                            <div className="flex-shrink-0">
                                <img
                                    src={bio.profileImage || "/default-profile.png"} // ডিফল্ট চিত্র
                                    alt={bio.name}
                                    className="w-32 h-32 object-cover rounded-full shadow-lg"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 p-4 sm:p-8 bg-gray-50 dark:bg-gray-700">
                                <div className="flex-grow w-full sm:w-auto">
                                    <h2 className="text-2xl font-bold text-center sm:text-left">{bio.name}</h2>
                                    <div className="flex gap-10">
                                        <div className="mt-4 space-y-2">
                                            <p className="text-sm">
                                                <strong>Email:</strong> {bio.contactEmail}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Occupation:</strong> {bio.occupation}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Age:</strong> {bio.age} years
                                            </p>
                                            <p className="text-sm">
                                                <strong>Height:</strong> {bio.height}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Weight:</strong> {bio.weight}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Race:</strong> {bio.race}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Father's Name:</strong> {bio.fathersName}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Mother's Name:</strong> {bio.mothersName}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Permanent Division:</strong> {bio.permanentDivision}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Present Division:</strong> {bio.presentDivision}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Mobile Number:</strong> {bio.mobileNumber}
                                            </p>
                                            <p className="text-sm">
                                                <strong>Status:</strong> {bio.status}
                                            </p>
                                        </div>

                                        <div className="mt-6">
                                            <h3 className="text-lg font-semibold">Partner Expectations:</h3>
                                            <ul className="list-disc list-inside text-sm space-y-1">
                                                <li>
                                                    <strong>Age:</strong> {bio.expectedPartnerAge} years
                                                </li>
                                                <li>
                                                    <strong>Height:</strong> {bio.expectedPartnerHeight}
                                                </li>
                                                <li>
                                                    <strong>Weight:</strong> {bio.expectedPartnerWeight}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex justify-center md:justify-start">
                                        <Link to={`/checkout/${bio._id}`}>
                                            <button className="btn bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">
                                                Premium Now
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
                    <NoFilesFound />
                </div>
            )}
        </div>
    );
};

export default BiodataFetcher;
