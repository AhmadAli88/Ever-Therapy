import { Navigate } from 'react-router-dom';
import { PATH } from '../../config';
import { ParentComponentWithSideBar } from '../../assets';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
  const jwtToken = JSON.parse(localStorage.getItem('dummy_user'));

  if (jwtToken) {
    return <ParentComponentWithSideBar>{children}</ParentComponentWithSideBar>;
  } else {
    return <Navigate to={PATH.SIGN_IN} replace />;
  }
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
