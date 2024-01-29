import React, { useContext } from "react";
import { UserContext } from "../context/Authorization";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Shared/Loading/Loading";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    let location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;
