
import PropTypes from "prop-types";
import { LoaderPageWithoutBG } from "../../assets";

function PublicRoute({ children }) {
  const jwtToken = JSON.parse(localStorage.getItem("dummy_user"));
  if (jwtToken) {
    return (window.location.href = "/dashboard");
  } else {
    return (
      <>
        {jwtToken ? <LoaderPageWithoutBG /> : null}
        {children}
      </>
    );
  }
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
}
export default PublicRoute;
