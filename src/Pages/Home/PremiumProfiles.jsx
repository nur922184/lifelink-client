import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const PremiumProfiles = () => {
    const [profiles, setProfiles] = useState([]);
    const [sortOrder, setSortOrder] = useState("ascending");
    const navigate = useNavigate();

    // Fetch data from API
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await fetch("http://localhost:5000/biodata");
                const data = await response.json();
                console.log(data)
                // Filter premium users
                const premiumUsers = data.filter((user) => user.status === "Premium");
                setProfiles(premiumUsers);
            } catch (error) {
                console.error("Failed to fetch biodata:", error);
            }
        };

        fetchProfiles();
    }, []);

    // Sort profiles based on age
    const sortedProfiles = [...profiles].sort((a, b) =>
        sortOrder === "ascending" ? a.age - b.age : b.age - a.age
    );

    // Handle view profile button click
    const handleViewProfile = (_id) => {
        navigate(`/profile/${_id}`);
    };

    return (
        <div className="container mx-auto p-5">
            <h2 className="text-2xl font-bold text-center mb-5">Premium Members</h2>

            {/* Dropdown for sorting */}
            <div className="flex justify-end mb-4">
                <label htmlFor="sortOrder" className="mr-2 font-medium">
                    Sort by Age:
                </label>
                <select
                    id="sortOrder"
                    className="border border-gray-300 rounded p-2"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>

            {/* Premium Member Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProfiles.map((profile) => (
                    <div
                        key={profile.id}
                        className="border border-gray-300 rounded-lg p-4 shadow-md"
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            {profile.profileImage ? (
                                <img
                                    src={profile.profileImage}
                                    alt="Profile"
                                    className="w-20 h-20 rounded-full"
                                />

                            ) : (
                                <FaUserCircle className="text-gray-500 w-20 h-20" />
                            )}

                            <div>
                                <h3 className="text-xl font-bold">{profile.name}</h3>
                                <p className="text-gray-600">{profile.type}</p>
                                <span className=" flex text-teal-500 bg-teal-100 items-center gap-1 ">
                                    <MdOutlineWorkspacePremium /> {profile.status} 
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            <strong>Division:</strong> {profile.permanentDivision}
                        </p>
                        <p className="text-gray-700">
                            <strong>Age:</strong> {profile.age}
                        </p>
                        <p className="text-gray-700">
                            <strong>Occupation:</strong> {profile.occupation}
                        </p>
                        <button
                            onClick={() => handleViewProfile(profile._id)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            View Profile
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremiumProfiles;
