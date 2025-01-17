import React from 'react';
import useFetchBiodata from '../../../Hooks/useFetchBiodata';



const ViewBiodata = () => {

  const { BioData } = useFetchBiodata()
  const biodata = BioData.id;
  console.log(biodata)


  // If biodata is loading
  // if (isLoading) {
  //   return <p>Loading biodata...</p>;
  // }

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
      <>
      <p>ace</p>
      </>
      )}
    </div>
  );
};

export default ViewBiodata;
