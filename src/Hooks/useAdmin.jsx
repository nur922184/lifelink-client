import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin = false, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading && !!user?.email, // Ensure user.email exists and loading is false
        queryFn: async () => {
            // console.log("Checking if user is admin:", user);
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log("Admin check response:", res.data);
            return res.data?.admin || false; // Return false if no admin data
        },
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
