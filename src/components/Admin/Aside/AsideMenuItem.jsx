import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { checkIsActive } from 'utils/routeHelper';

function AsideMenuItem(props) {
  const { pathname } = useLocation();
  const { isFull, to, title, icon, hasArrow, hasBullet } = props;
  const isActive = checkIsActive(pathname, to);
  // console.log({ isActive });
  console.log(pathname, to);
  return (
    <Link
      to={to}
      className={`text-admin-bs-gray flex items-center pl-7 py-2.5 rounded-bl-xl group ${
        isActive ? 'bg-admin-bs-darker' : ''
      }`}
    >
      {icon && (
        <div className={`w-5 mr-4 flex justify-center`}>
          <i
            className={`group-hover:text-admin-bs-white text-base duration-300 ${icon} ${
              isActive ? 'text-admin-bs-white' : ''
            }`}
          >
            {' '}
          </i>
        </div>
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
          className={`group-hover:text-admin-bs-white   flex-1 ${
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
