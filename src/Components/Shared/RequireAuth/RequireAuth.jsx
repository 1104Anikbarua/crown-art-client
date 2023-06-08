import React, { useContext } from 'react';
import { DrawingContext } from '../../AuthProvider/AuthProvider';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {

    const { user, loading } = useContext(DrawingContext)
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user?.email) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;