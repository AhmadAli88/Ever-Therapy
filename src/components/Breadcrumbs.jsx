import PropTypes from 'prop-types';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import React from 'react';

const MuiBreadcrumbs = ({ separator = '/', fontSize = 'medium', items = [], onClick, activeLast = true }) => {
  const styles = {
    fontSize: fontSize,
  };

  return (
    <Breadcrumbs separator={separator} aria-label="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (typeof item === 'string') {
          return isLast && activeLast ? (
            <Typography key={index} sx={{ color: 'text.primary', ...styles }}>
              {item}
            </Typography>
          ) : (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              sx={{ cursor: 'pointer', ...styles }}
              onClick={() => onClick?.(item, index)}
            >
              {item}
            </Link>
          );
        }

        return React.cloneElement(item, {
          key: index,
          sx: { ...styles, ...(isLast && activeLast ? { color: '#0000FF' } : {}) },
          onClick: !isLast ? () => onClick?.(item.props.children, index) : undefined,
        });
      })}
    </Breadcrumbs>
  );
};

MuiBreadcrumbs.propTypes = {
  separator: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  onClick: PropTypes.func,
  activeLast: PropTypes.bool,
};

export default MuiBreadcrumbs;
