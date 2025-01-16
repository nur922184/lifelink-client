import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000', // আপনার API এর সঠিক URL দিন
});

const useAxiosSecurePublic = () => {
    return axiosPublic; // axios ইন্সট্যান্স রিটার্ন করা হচ্ছে
};

export default useAxiosSecurePublic;
