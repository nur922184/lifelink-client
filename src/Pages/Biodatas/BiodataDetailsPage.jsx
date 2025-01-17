import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, } from "react-icons/fa";

import useAuth from '../../Hooks/useAuth';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useBioDetails from '../../Hooks/useBioDetails';
import ViewProfile from '../../Component/BTN/ViewProfile';

const BiodataDetailsPage = () => {
  const { user } = useAuth();
  const biodata = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useBioDetails()
  const [similarBiodatas, setSimilarBiodatas] = useState([]);
  const navigate = useNavigate();
  // Mock logic for premium check

  // Fetch similar biodatas (maximum 3)
  useEffect(() => {
    const fetchSimilarBiodatas = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/biodata?type=${biodata.type}&_limit=3`
        );
        const data = await response.json();
        setSimilarBiodatas(data);
      } catch (error) {
        console.error('Error fetching similar biodatas:', error);
      }
    };

    fetchSimilarBiodatas();
  }, [biodata.type]);

  // Add to favorites functionality
  const handleAddToFavorites = () => {
    if (user && user.email) {
      const favoritesDetails = {
        biodataId: biodata.id,
        viewId: biodata._id,
        email: user.email,
        name: biodata.name,
        occupation: biodata.occupation,
        type: biodata.type,
        mobileNumber: biodata.mobileNumber,
        permanentDivision: biodata.permanentDivision,
        age: biodata.age,
        profileImage: biodata.profileImage
      }
      axiosSecure.post('/favorites', favoritesDetails)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your favorites has been added",
              showConfirmButton: false,
              timer: 1000
            });
            refetch();
          }
        })
    }

  };

  // Handle request contact information
  const handleRequestContact = () => {
    navigate(`/checkout/${biodata._id}`);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
        <div className="flex flex-col md:flex-row items-center text-white">
          {/* Left Section */}
          <div className="flex flex-col items-center text-center p-6 md:border-r md:border-white md:w-1/2">
            <img
              src={biodata.profileImage}
              alt="Profile"
              className="w-56 h-48 object-cover rounded-xl border-4 border-white shadow-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{biodata.name}</h2>
            <p className="text-purple-200 text-sm">{biodata.type}</p>
          </div>

          {/* Right Section */}
          <div className="p-6 md:w-1/2 space-y-4 mt-6">
            <h3 className="text-xl font-bold text-center md:text-left border-b-2 border-white pb-2">
              Profile Details
            </h3>
            <p>
              <strong>Name:</strong> {biodata.name}
            </p>
            <p>
              <strong>Age:</strong> {biodata.age}
            </p>
            <p>
              <strong>Height:</strong> {biodata.height}
            </p>
            <p>
              <strong>Weight:</strong> {biodata.weight}
            </p>
            <p>
              <strong>Permanent Division:</strong> {biodata.permanentDivision}
            </p>
            <p>
              <strong>Present Division:</strong> {biodata.presentDivision}
            </p>
            <p>
              <strong>Occupation:</strong> {biodata.occupation}
            </p>
            <p>
              <strong>Father's Name:</strong> {biodata.fathersName}
            </p>
            <p>
              <strong>Mother's Name:</strong> {biodata.mothersName}
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-yellow-400" />
              <strong>Address:</strong> {biodata.address}
            </p>
            <div className="mt-4 text-center">
              <p className="text-sm">Made with ❤️ by {biodata.name}</p>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        {biodata.status === "Premium" ? (
          <>
            <p className="text-red-500">
              Contact Information is visible to premium members only.
            </p>

          </>
        ) : (
          <>
            <p className="flex items-center">
              <FaPhone className="mr-2 text-yellow-400" />
              <strong>Mobile:</strong> {biodata.mobileNumber}
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-yellow-400" />
              <strong>Email:</strong> {biodata.contactEmail}
            </p>
          </>
        )}


        {/* Actions */}
        <div className="mt-4">
          <button
            onClick={handleAddToFavorites}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            <FaHeart></FaHeart>
          </button>
          <button
            onClick={handleRequestContact}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Request Contact Information
          </button>

        </div>
      </div>

      {/* Similar Biodatas */}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Similar Biodatas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarBiodatas.map((similar) => (

            <div className="flex items-center p-4 rounded-lg shadow-lg bg-gray-100 w-72">
              {/* Profile Image */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={similar.profileImage} // Replace this with the actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* User Info */}
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">{similar.name}</h2>
                <p className="text-sm text-gray-600">{similar.type}</p>
              </div>

              {/* Menu Icon */}
              <Link to={`/profile/${similar._id}`}>
                <button className=''>
                  <ViewProfile></ViewProfile>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetailsPage;
