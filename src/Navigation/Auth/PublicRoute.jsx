import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { PATH } from "../../config";

function PublicRoute({ children }) {
  const jwtToken = localStorage.getItem("dummy_user");
  
  if (jwtToken) {
    return <Navigate to={PATH.DASHBOARD} />;
  }

  return children;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PublicRoute;