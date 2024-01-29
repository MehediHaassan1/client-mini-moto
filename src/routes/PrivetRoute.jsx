import React, { useContext } from 'react';
import { UserContext } from '../context/Authorization';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    let location = useLocation();

    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivetRoute;