import PropTypes from 'prop-types';
import React from 'react';

function HeaderMenuItem(props) {
  const { to, title, icon, hasArrow, hasBullet, isActive } = props;

  return (
    <div
      className={`relative px-3 py-2 rounded-md bg-opacity-5 duration-300 cursor-pointer text-sm text-admin-bs-gray font-bold hover:text-admin-bs-primary hover:bg-admin-bs-primary hover:bg-opacity-5 flex items-center ${
        isActive ? 'bg-admin-bs-primary  text-admin-bs-primary' : ''
      }`}
    >
      {hasBullet && (
        <i
          className={`pr-3 duration-300 text-bullet fas fa-circle ${
            isActive ? 'text-admin-bs-primary' : ''
          }`}
        ></i>
      )}
      {icon && <i className={`${title && 'pr-3'} ${icon}`}></i>}
      {title && <div className={`flex-1 `}>{title}</div>}
      {hasArrow && (
        <p
          className={`duration-300 ml-3 transform ${
            isActive ? 'rotate-90' : ''
          }`}
        >
          <i className={`fas fa-angle-right`}></i>
        </p>
      )}
    </div>
  );
}

HeaderMenuItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasBullet: PropTypes.bool,
  isActive: PropTypes.bool,
};

HeaderMenuItem.defaultProps = {
  to: '',
  title: '',
  icon: '',
  hasArrow: false,
  hasBullet: false,
  isActive: false,
};

export default HeaderMenuItem;
