
import { Navigate,  useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Loading from '../Shared/Loading/Loading';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location =useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/signin'} replace></Navigate>
    );
};

export default PrivateRoute;