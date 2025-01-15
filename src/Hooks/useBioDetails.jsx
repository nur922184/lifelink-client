import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useBioDetails = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { refetch, data: BioDetails = [''] } = useQuery({
        queryKey: ['BioDetails', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/favorites?email=${user.email}`)
            return res.data;
        }
    })
    return [BioDetails, refetch]
};

export default useBioDetails;