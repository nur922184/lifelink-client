import React from 'react';
import useAdmin from '../../../Hooks/useAdmin';

const AdminC = () => {
        const [isAdmin, isAdminLoading] = useAdmin();
    
        if (isAdminLoading) {
            return <p>Loading...</p>; // Show a loading indicator while checking admin status
        }
    
        return (
            <div>
                {isAdmin ? (
                    <p>Welcome Admin!</p> // Admin-specific content
                ) : (
                    <p>Welcome User!</p> // User-specific content
                )}
            </div>
        );
    };
    

export default AdminC;