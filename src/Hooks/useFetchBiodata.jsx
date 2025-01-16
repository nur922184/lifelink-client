import { useState, useEffect } from "react";
import useAxiosSecurePublic from "./useAxiosSecurePublic";

const useFetchBiodata = () => {
  const axiosPublic = useAxiosSecurePublic(); // Pre-configured Axios instance
  const [BioData, setBioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosPublic.get("/biodata"); // Only endpoint is needed
        setBioData(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosPublic]);

  return { BioData, loading, error };
};

export default useFetchBiodata;
