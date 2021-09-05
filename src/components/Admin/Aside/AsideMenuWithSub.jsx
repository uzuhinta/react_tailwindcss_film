import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AsideMenuWithSub(props) {
  const [isActive, setIsActive] = useState(false);
  const { isFull, to, title, icon, hasArrow, hasBullet } = props;

  
  return (
    <div>
      <div
        onClick={() => setIsActive(!isActive)}
        className={`group text-admin-bs-gray cursor-pointer flex items-center pl-7 py-1 ${
          isActive ? 'bg-admin-bs-darker' : ''
        }`}
      >
        {icon && (
          <i
            className={`group-hover:text-admin-bs-white duration-300 pr-4 ${icon} ${
              isActive ? 'text-admin-bs-white' : ''
            } text-xl`}
          ></i>
        )}
        {hasBullet && (
          <i
            className={`group-hover:text-admin-bs-white text-bullet fas fa-circle pr-3 ${
              isActive ? 'text-admin-bs-white' : ''
            }`}
          ></i>
        )}
        {title && isFull && (
          <p
            className={`group-hover:text-admin-bs-white delay-300 flex-1 ${
              isActive ? 'text-admin-bs-white' : ''
            }`}
          >
            {title}
          </p>
        )}
        {hasArrow && isFull && (
          <p
            className={`group-hover:text-admin-bs-white pl-4 duration-300 transform ${
              isActive ? 'text-admin-bs-white rotate-90' : ''
            }`}
          >
            <i className={`fas fa-angle-right pr-4`}></i>
          </p>
        )}
      </div>
      {isActive && isFull && (
        <div className={`pl-2.5 ${isActive ? 'bg-admin-bs-darker' : ''}`}>
          {props.children}
        </div>
      )}
    </div>
  );
}

AsideMenuWithSub.propTypes = {
  isFull: PropTypes.bool,
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasBullet: PropTypes.bool,
  isActive: PropTypes.bool,
};

AsideMenuWithSub.propTypes = {
  isFull: false,
  to: '',
  title: '',
  icon: '',
  hasArrow: false,
  hasBullet: false,
  isActive: false,
};

export default AsideMenuWithSub;