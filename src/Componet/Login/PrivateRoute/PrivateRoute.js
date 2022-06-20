import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if (isLoading){
        return <CircularProgress></CircularProgress>
    }
    return user.email ? children:   <Navigate  to="/login" replace  />
};

export default PrivateRoute;