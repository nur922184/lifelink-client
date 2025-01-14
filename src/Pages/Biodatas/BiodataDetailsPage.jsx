import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const BiodataDetailsPage = () => {
  const biodata = useLoaderData();
  const [similarBiodatas, setSimilarBiodatas] = useState([]);
  const navigate = useNavigate();
  const isPremium = localStorage.getItem('userType') === 'premium'; // Mock logic for premium check

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
  const handleAddToFavorites = async () => {
    try {
      await fetch('http://localhost:5000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          biodataId: biodata.id,
          userId: localStorage.getItem('userId'),
        }),
      });
      alert('Added to favorites!');
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  // Handle request contact information
  const handleRequestContact = () => {
    navigate(`/checkout/${biodata.id}`);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="border p-4 rounded shadow-md">
        <img
          src={biodata.profileImage || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-full h-60 object-cover rounded mb-4"
        />
        <h1 className="text-2xl font-bold">{biodata.name}</h1>
        <p>
          <strong>Biodata Type:</strong> {biodata.type}
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

        {/* Contact Info */}
        {isPremium ? (
          <>
            <p>
              <strong>Contact Email:</strong> {biodata.contactEmail}
            </p>
            <p>
              <strong>Mobile Number:</strong> {biodata.mobileNumber}
            </p>
          </>
        ) : (
          <p className="text-red-500">Contact Information is visible to premium members only.</p>
        )}

        {/* Actions */}
        <div className="mt-4">
          <button
            onClick={handleAddToFavorites}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Add to Favorites
          </button>
          {!isPremium && (
            <button
              onClick={handleRequestContact}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Request Contact Information
            </button>
          )}
        </div>
      </div>

      {/* Similar Biodatas */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Similar Biodatas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarBiodatas.map((similar) => (
            <div
              key={similar.id}
              className="border p-4 rounded shadow-md"
            >
              <img
                src={similar.profileImage || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold">{similar.name}</h3>
              <p>
                <strong>Type:</strong> {similar.type}
              </p>
              <p>
                <strong>Division:</strong> {similar.permanentDivision}
              </p>
              <p>
                <strong>Age:</strong> {similar.age}
              </p>
              <p>
                <strong>Occupation:</strong> {similar.occupation}
              </p>
              <button
                onClick={() => navigate(`/profile/${similar.id}`)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetailsPage;
