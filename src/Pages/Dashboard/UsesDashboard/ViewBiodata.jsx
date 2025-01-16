import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ViewBiodata = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // Fetch user's biodata
  const { data: biodata, isLoading } = useQuery({
    queryKey: ['biodata', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/biodata/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Ensure query only runs if user email exists
  });

  // If biodata is loading
  if (isLoading) {
    return <p>Loading biodata...</p>;
  }

  return (
    <div className="p-6">
      {/* If no biodata exists */}
      {!biodata ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">No Biodata Found</h2>
          <p className="mb-4">You don't have any biodata yet. Please create one.</p>
          <button
            onClick={() => navigate('/dashboard/editBiodata')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create a New Biodata
          </button>
        </div>
      ) : (
        // If biodata exists, display the details
        <div>
          <h2 className="text-2xl font-bold mb-6">My Biodata</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={biodata.profileImage || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-48 h-48 object-cover rounded-full mb-4"
              />
            </div>
            <div>
              <p>
                <strong>Biodata Type:</strong> {biodata.biodataType}
              </p>
              <p>
                <strong>Name:</strong> {biodata.name}
              </p>
              <p>
                <strong>Date of Birth:</strong> {biodata.dateOfBirth}
              </p>
              <p>
                <strong>Height:</strong> {biodata.height}
              </p>
              <p>
                <strong>Weight:</strong> {biodata.weight}
              </p>
              <p>
                <strong>Age:</strong> {biodata.age}
              </p>
              <p>
                <strong>Occupation:</strong> {biodata.occupation}
              </p>
              <p>
                <strong>Race:</strong> {biodata.race}
              </p>
              <p>
                <strong>Father's Name:</strong> {biodata.fathersName}
              </p>
              <p>
                <strong>Mother's Name:</strong> {biodata.mothersName}
              </p>
              <p>
                <strong>Permanent Division:</strong> {biodata.permanentDivision}
              </p>
              <p>
                <strong>Present Division:</strong> {biodata.presentDivision}
              </p>
              <p>
                <strong>Expected Partner Age:</strong> {biodata.expectedPartnerAge}
              </p>
              <p>
                <strong>Expected Partner Height:</strong> {biodata.expectedPartnerHeight}
              </p>
              <p>
                <strong>Expected Partner Weight:</strong> {biodata.expectedPartnerWeight}
              </p>
              <p>
                <strong>Contact Email:</strong> {biodata.contactEmail}
              </p>
              <p>
                <strong>Mobile Number:</strong> {biodata.mobileNumber}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => alert('Request for Premium!')}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Make Biodata Premium
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBiodata;
