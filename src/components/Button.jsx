import PropTypes from 'prop-types';

const Button = ({
  display,
  justifyContent,
  alignItems,
  backgroundColor,
  color,
  fontSize,
  borderRadius,
  padding,
  margin,
  height,
  width,
  children,
}) => {
  const style = {
    backgroundColor,
    color,
    fontSize,
    borderRadius,
    padding,
    margin,
    height,
    width,
    display,
    justifyContent,
    alignItems
  };

  return <div style={style}>{children}</div>;
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  borderRadius: PropTypes.number,
  padding: PropTypes.string,
  margin: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node,
};
Button.defaultProps = {
  backgroundColor: '#007BFF',
  color: '#fff',
  fontSize: '16px',
  borderRadius: '4px',
  padding: '',
  margin: '0',
  height: 'auto',
  width: 'auto',
};

export default Button;
