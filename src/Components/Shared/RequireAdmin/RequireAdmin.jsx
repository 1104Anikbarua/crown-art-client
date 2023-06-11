import React, { useContext } from 'react';
import { DrawingContext } from '../../AuthProvider/AuthProvider';
import UseAdmin from '../../Hook/UseAdmin';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAdmin = ({ children }) => {
    const { user, loading } = useContext(DrawingContext)
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if (loading && isAdminLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user?.email && isAdmin?.admin) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;