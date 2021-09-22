import PropTypes from 'prop-types';
import React, { useState } from 'react';

function AsideMenuWithSub(props) {
  const [isActive, setIsActive] = useState(false);
  const { isFull, to, title, icon, hasArrow, hasBullet } = props;
  return (
    <div>
      <div
        onClick={() => setIsActive(!isActive)}
        className={`group text-admin-bs-gray cursor-pointer flex items-center pl-7 py-2.5 rounded-bl-xl ${
          isActive ? 'bg-admin-bs-darker' : ''
        }`}
      >
        {icon && (
          <div className={`w-5 mr-4 flex justify-center`}>
            <i
              className={`group-hover:text-admin-bs-white text-base duration-300  ${icon} ${
                isActive ? 'text-admin-bs-white' : ''
              }`}
            ></i>
          </div>
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
      {isActive && isFull && <div className={`pl-2.5`}>{props.children}</div>}
    </div>
  );
}

AsideMenuWithSub.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasBullet: PropTypes.bool,
  isActive: PropTypes.bool,
};

AsideMenuWithSub.propTypes = {
  to: '',
  title: '',
  icon: '',
  hasArrow: false,
  hasBullet: false,
  isActive: false,
};

export default AsideMenuWithSub;
