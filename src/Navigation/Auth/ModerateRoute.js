import PropTypes from 'prop-types';

function ModerateRoute({ children }) {
  return <>{children}</>;
}

ModerateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ModerateRoute;
