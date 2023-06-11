import React, { useContext } from 'react';
import { DrawingContext } from '../../AuthProvider/AuthProvider';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';
import UseInstructor from '../../Hook/UseInstructor';

const RequireInstructor = ({ children }) => {
    const { user, loading } = useContext(DrawingContext)
    const [isInstructor, isInstructorLoading] = UseInstructor();
    const location = useLocation();

    if (loading && isInstructorLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user?.email && !isInstructor?.instructor) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireInstructor;