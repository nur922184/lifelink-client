import { useState } from "react";

const EditBiodata = () => {
    const [biodata, setBiodata] = useState({
        type: "",
        name: "",
        profileImage: "",
        dateOfBirth: "",
        height: "",
        weight: "",
        age: "",
        occupation: "",
        race: "",
        fatherName: "",
        motherName: "",
        permanentDivision: "",
        presentDivision: "",
        expectedPartnerAge: "",
        expectedPartnerHeight: "",
        expectedPartnerWeight: "",
        contactEmail: "",
        mobileNumber: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send biodata to the server
        console.log("Biodata submitted:", biodata);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold">Edit Your Biodata</h2>
            <div>
                <label>Biodata Type</label>
                <select
                    required
                    value={biodata.type}
                    onChange={(e) =>
                        setBiodata({ ...biodata, type: e.target.value })
                    }
                >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            {/* Add similar inputs for other fields */}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                Save & Publish Now
            </button>
        </form>
    );
};

export default EditBiodata;
