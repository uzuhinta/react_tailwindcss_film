import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AsideMenuItem(props) {
  const { isFull, to, title, icon, hasArrow, hasBullet, isActive } = props;
  return (
    <Link
      to={to}
      className={`text-admin-bs-gray flex items-center pl-7 py-2.5  group ${
        isActive ? 'bg-admin-bs-darker' : ''
      }`}
    >
      {icon && (
        <i
          className={`group-hover:text-admin-bs-white duration-300 pr-4 ${icon} ${
            isActive ? 'text-admin-bs-white' : ''
          } text-xl`}
        >
          {' '}
        </i>
      )}
      {hasBullet && (
        <i
          className={`group-hover:text-admin-bs-white  duration-300 text-bullet fas fa-circle pr-3 ${
            isActive ? 'text-admin-bs-white' : ''
          }`}
        ></i>
      )}
      {title && (
        <p
          className={`group-hover:text-admin-bs-white  duration-300 flex-1 ${
            isFull ? '' : 'invisible'
          }`}
        >
          {title}
        </p>
      )}
    </Link>
  );
}

AsideMenuItem.propTypes = {
  isFull: PropTypes.bool,
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasBullet: PropTypes.bool,
  isActive: PropTypes.bool,
};

AsideMenuItem.defaultProps = {
  isFull: false,
  to: '',
  title: '',
  icon: '',
  hasArrow: false,
  hasBullet: false,
  isActive: false,
};

export default AsideMenuItem;
