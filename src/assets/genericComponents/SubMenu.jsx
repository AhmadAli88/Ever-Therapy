import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { BsArrowRightShort, BsArrowDownShort } from "react-icons/bs";
import PropTypes from 'prop-types';

export default function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
  };
  let location = useLocation();

  return (
    <React.Fragment>
      <li className={`${item?.path?.includes(location?.pathname) ? "active" : ""}`}>
        {item?.path ? (
          <Link
            onClick={showSubnav}
            to={{ pathname: item?.path }}
          >
            {item?.icon}
            <span>{item?.title}</span>
            {item?.subNav && subnav ? (
              <BsArrowDownShort
                className="ms-auto right_arrow_hide me-0"
                size={23}
              />
            ) : item.subNav ? (
              <BsArrowRightShort
                className="ms-auto right_arrow_hide me-0"
                size={23}
              />
            ) : null}
          </Link>
        ) : (
          <Link
            onClick={(e) => {
              e.preventDefault();
              showSubnav();
            }}
            to={{ pathname: "" }}
          >
            {item?.icon}
            <span>{item?.title}</span>
            {item?.subNav && subnav ? (
              <BsArrowDownShort
                className="ms-auto right_arrow_hide me-0"
                size={23}
              />
            ) : item.subNav ? (
              <BsArrowRightShort
                className="ms-auto right_arrow_hide me-0"
                size={23}
              />
            ) : null}
          </Link>
        )}
      </li>
      <ul className="d-block">
        {subnav &&
          item.subNav?.map((navItem, idx) => {
            return (
              <React.Fragment key={idx}>
                {navItem.subNav ? (
                  <SubMenu item={navItem} />
                ) : (
                  <li
                    className={`${
                      navItem?.pathList?.includes(location?.pathname)
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link
                      className={`${
                        navItem?.pathList?.includes(location?.pathname)
                          ? ""
                          : "text-white"
                      }`}
                      to={{ pathname: navItem?.path }}
                      onClick={navItem?.onClick}
                    >
                      <div className="d-flex align-items-center justiy-content-center">
                        {navItem?.icon}
                        <div className="SubnavLabel">{navItem.title}</div>
                      </div>
                    </Link>
                  </li>
                )}
              </React.Fragment>
            );
          })}
      </ul>
    </React.Fragment>
  );
}

// Define the shape of a navigation item
const NavItemShape = PropTypes.shape({
  path: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  pathList: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  subNav: PropTypes.arrayOf(PropTypes.object) // Using object because it's recursive
});

SubMenu.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    pathList: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    subNav: PropTypes.arrayOf(NavItemShape)
  }).isRequired
};

SubMenu.defaultProps = {
  item: {
    title: '',
    subNav: []
  }
};