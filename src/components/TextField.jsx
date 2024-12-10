import { TextField, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';

const MuiTextField = ({
  type = 'text',
  label = '',
  variant = 'outlined',
  icon = null,
  adornmentPosition = 'start',
  className = '',
  width,
  ...props
}) => {
  return (
    <TextField
      type={type}
      label={label}
      variant={variant}
      style={{ width }}  // Apply width as an inline style
      // sx={{ width }} // Use MUI's `sx` prop for inline styling
      className={`parent_Field text-secondary-darkgray-light_400 ${className}`}
      InputProps={{
        [adornmentPosition === 'start' ? 'startAdornment' : 'endAdornment']: icon && (
          <InputAdornment position={adornmentPosition}>
            {icon}
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

MuiTextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  icon: PropTypes.node,
  adornmentPosition: PropTypes.oneOf(['start', 'end']),
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MuiTextField;
