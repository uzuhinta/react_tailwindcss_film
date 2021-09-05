import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HeaderMenuWithSub(props) {
  const [isActive, setIsActive] = useState(false);
  const { to, title, icon, img, hasArrow, hasBullet, menuPlacement } = props;

  return (
    <div
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`relative`}
    >
      <div
        className={`px-3 py-2 rounded-md bg-opacity-5 duration-300 cursor-pointer text-sm text-admin-bs-gray font-bold ${
          !img &&
          `hover:text-admin-bs-primary hover:bg-admin-bs-primary hover:bg-opacity-5 ${
            isActive ? 'bg-admin-bs-primary  text-admin-bs-primary' : ''
          }`
        } flex items-center `}
      >
        {hasBullet && (
          <i
            className={`pr-3 duration-300 text-bullet fas fa-circle ${
              isActive ? 'text-admin-bs-primary' : ''
            }`}
          ></i>
        )}
        {icon && <i className={`pr-3 ${icon}`}></i>}
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
        {/* For Avatar */}
        {img && (
          <div
            className={`h-11 w-11 group cursor-pointer rounded overflow-hidden`}
          >
            <img
              src={img}
              alt="avatar"
              className={`rounded-md duration-300 transform group-hover:scale-125 `}
            ></img>
          </div>
        )}
      </div>

      {isActive && (
        <div
          className={`absolute duration-300 py-2 z-10 w-52 ${menuPlacement} bg-admin-bs-white shadow-drop-down rounded-md`}
        >
          {props.children}
        </div>
      )}
    </div>
  );
}

HeaderMenuWithSub.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  img: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasBullet: PropTypes.bool,
  isActive: PropTypes.bool,
  menuPlacement: PropTypes.string,
};

HeaderMenuWithSub.propTypes = {
  title: 'Mega menu',
  icon: 'fas fa-rocket',
  img: '',
  hasArrow: true,
  hasBullet: false,
  isActive: false,
  menuPlacement: 'top-0 left-full', //'top-125'
};

export default HeaderMenuWithSub;
