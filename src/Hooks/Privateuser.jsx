import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useAxiosSecurePublic from "./useAxiosSecurePublic";

const PrivateUser = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosSecurePublic();
    const navigate = useNavigate();

    useEffect(() => {
        const checkUserAccess = async () => {
            try {
                if (!user?.email) {
                    // ইউজার ইমেইল না থাকলে কিছুই করা হবে না
                    return;
                }

                const response = await axiosPublic.get(`/biodata?email=${user.email}`);

                if (response.status === 200 && response.data?.isValid) {
                    // মেইল ম্যাচ করলে শুধু নেভিগেট করা হবে
                    navigate("/");
                }
            } catch (error) {
                console.error("Error validating user:", error);
            }
        };

        checkUserAccess();
    }, [user, axiosPublic,]);

   
};

export default PrivateUser;
