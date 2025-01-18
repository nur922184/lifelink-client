import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://final-project-server-tau-jade.vercel.app', // আপনার API এর সঠিক URL দিন
});

const useAxiosSecurePublic = () => {
    return axiosPublic; // axios ইন্সট্যান্স রিটার্ন করা হচ্ছে
};

export default useAxiosSecurePublic;
