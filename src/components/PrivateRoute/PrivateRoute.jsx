import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const {pathname} = useLocation();

    if(!user)return <Navigate state={pathname} to="/login"/>
    return (<>{children}</>);
};

PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;