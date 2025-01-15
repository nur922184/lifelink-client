import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import imgBiodata from '../../assets/Images/gif.gif'
import { GiBookAura } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";

const BiodataPage = () => {
    const [biodatas, setBiodatas] = useState([]);
    const [filteredBiodatas, setFilteredBiodatas] = useState([]);
    const [filters, setFilters] = useState({
        ageRange: [0, 100],
        biodataType: "",
        division: "",
    });
    // const navigate = useNavigate();

    // Fetch biodata from the API
    useEffect(() => {
        const fetchBiodatas = async () => {
            try {
                const response = await fetch("http://localhost:5000/biodata");
                const data = await response.json();
                console.log('Biodata:', data)
                setBiodatas(data.slice(0, 20)); // Show only 20 biodatas
                setFilteredBiodatas(data.slice(0, 20));
            } catch (error) {
                console.error("Failed to fetch biodata:", error);
            }
        };

        fetchBiodatas();
    }, []);

    // Apply filters
    useEffect(() => {
        const { ageRange, biodataType, division } = filters;

        const filtered = biodatas.filter((biodata) => {
            const matchesAge =
                biodata.age >= ageRange[0] && biodata.age <= ageRange[1];
            const matchesType =
                biodataType === "" || biodata.type.toLowerCase() === biodataType;
            const matchesDivision =
                division === "" ||
                biodata.permanentDivision.toLowerCase() === division;

            return matchesAge && matchesType && matchesDivision;
        });

        setFilteredBiodatas(filtered);
    }, [filters, biodatas]);

    // Handle filter changes
    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Handle view profile button click
    //   const handleViewProfile = (_id) => {
    //     const id = data._id;
    //     console.log(id)
    //     navigate(`/profile/${id}`);
    //   };

    return (
        <div className="mx-auto p-5 grid grid-cols-12 gap-6 py-32">
            <Helmet>
                <title>Life Link  | BioData</title>
            </Helmet>
            {/* Sidebar for Filters */}
            <div className="col-span-3 border h-screen border-gray-300 p-4 rounded-lg sticky z-0 block shadow-md">
                <h2 className="text-xl font-bold mb-4">Filter Biodatas</h2>
                <div className="mb-4">
                    <label className="block font-medium mb-2">Age Range</label>
                    <input
                        type="number"
                        placeholder="Min"
                        className="border p-2 w-full mb-2"
                        value={filters.ageRange[0]}
                        onChange={(e) =>
                            handleFilterChange("ageRange", [
                                parseInt(e.target.value) || 0,
                                filters.ageRange[1],
                            ])
                        }
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        className="border p-2 w-full"
                        value={filters.ageRange[1]}
                        onChange={(e) =>
                            handleFilterChange("ageRange", [
                                filters.ageRange[0],
                                parseInt(e.target.value) || 100,
                            ])
                        }
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Biodata Type</label>
                    <select
                        className="border p-2 w-full"
                        value={filters.biodataType}
                        onChange={(e) => handleFilterChange("biodataType", e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Division</label>
                    <select
                        className="border p-2 w-full"
                        value={filters.division}
                        onChange={(e) => handleFilterChange("division", e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="chattagram">Chattagram</option>
                        <option value="rangpur">Rangpur</option>
                        <option value="barisal">Barisal</option>
                        <option value="khulna">Khulna</option>
                        <option value="mymensingh">Mymensingh</option>
                        <option value="sylhet">Sylhet</option>
                    </select>
                </div>
            </div>

            {/* Biodata List */}
            <div
                className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBiodatas.map((biodata) => (
                    // <div
                    //     key={biodata.id}
                    //     className="border border-gray-300 p-4 rounded-lg shadow-md"
                    // >
                    //     <img
                    //         src={biodata.profileImage || "https://via.placeholder.com/150"}
                    //         alt="Profile"
                    //         className="w-full h-40 object-cover rounded mb-4"
                    //     />
                    //     <h3 className="text-lg font-bold">{biodata.name}</h3>
                    //     <p>
                    //         <strong>Type:</strong> {biodata.type}
                    //     </p>
                    //     <p>
                    //         <strong>Division:</strong> {biodata.permanentDivision}
                    //     </p>
                    //     <p>
                    //         <strong>Age:</strong> {biodata.age}
                    //     </p>
                    //     <p>
                    //         <strong>Occupation:</strong> {biodata.occupation}
                    //     </p>
                    //     <Link to={`/profile/${biodata._id}`}>
                    //         <button
                    //             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    //         >View Profile
                    //         </button>
                    //     </Link>
                    // </div>
                    <div  style={{
                        backgroundImage: `url(${imgBiodata})`,
                    }}
                     key={biodata.id} className="flex w-full justify-center items-center bg-base-50">
                        <div className="w-full bg-base-50 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="flex justify-center mt-4">
                                <img
                                    className="w-24 h-24 rounded-full border-4 border-gray-300"
                                    src={biodata.profileImage || "https://via.placeholder.com/150"}
                                    alt="Profile"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <h2 className="text-2xl font-semibold text-gray-800">{biodata.name}</h2>
                                <p className="text-gray-600 text-sm">{biodata.type}</p>
                            </div>
                            <div className="mt-4 px-6">
                                <div className="flex items-center text-gray-600 mb-3">
                                    <FaMapMarkerAlt className="mr-3 text-gray-500" />
                                    <p>{biodata.permanentDivision}</p>
                                </div>
                                <div className="flex items-center text-gray-600 mb-3">
                                    <p>Age :</p>
                                    {biodata.age}
                                </div>
                                <div className="flex items-center text-gray-600 mb-3">
                                    <HiAcademicCap className="mr-3 text-gray-500" />
                                    <p>{biodata.occupation}</p>
                                </div>
                            </div>
                            <div className="text-center mt-4 mb-6">
                                <Link to={`/profile/${biodata._id}`}>
                                    <button className="border border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 px-4 py-2 rounded-lg text-sm transition duration-300">
                                        View Profile
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BiodataPage;
