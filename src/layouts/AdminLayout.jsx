import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AdminImages from 'constant/AdminImages';
import { Link } from 'react-router-dom';
import AsideMenuItem from 'components/Aside/AsideMenuItem';
import AsideMenuWithSub from 'components/Aside/AsideMenuWithSub';
import Aside from 'components/Aside/Aside';

const HeaderItem1 = [
  {
    to: '',
    title: 'Dashboard',
    icon: '',
    hasArrow: true,
    hasBullet: true,
    isActive: true,
  },
  {
    to: '',
    title: 'Layout Builder',
    icon: '',
    hasArrow: true,
    hasBullet: true,
    isActive: false,
  },
  {
    to: '',
    title: 'Crafted',
    icon: 'fas fa-rocket',
    hasArrow: true,
    hasBullet: false,
    isActive: false,
  },
  {
    to: '',
    title: 'Apps',
    icon: '',
    hasArrow: false,
    hasBullet: false,
    isActive: false,
  },
  {
    to: '',
    title: 'Mega menu',
    icon: 'fas fa-rocket',
    hasArrow: false,
    hasBullet: false,
    isActive: false,
  },
];

const HeaderItem2 = [
  {
    to: '',
    title: '',
    icon: 'fas fa-rocket',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
  },
  {
    to: '',
    title: '',
    icon: 'fas fa-calendar-check',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
  },
  {
    to: '',
    title: '',
    icon: 'fas fa-chart-bar',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
  },
  {
    to: '',
    title: '',
    icon: 'fab fa-facebook-messenger',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
  },
];

function AdminLayout(props) {
  let [isFull, setIsFull] = useState(true);

  const onChangeIsFull = (isFullChildren) => {
    setIsFull(isFullChildren);
  };

  return (
    <div className={`bg-admin-bs-bg`}>
      {/* Sidebar */}
      <Aside onChangeIsFull={onChangeIsFull} />
      {/* Sidebar */}

      {/* Header */}
      <div
        className={`Header fixed top-0 right-0 w-full z-40 duration-300 ${
          isFull ? 'pl-72' : 'pl-20'
        }`}
      >
        <div
          className={`TOP-HEADER h-16 border-b border-admin-bs-secondary bg-admin-bs-white flex items-center justify-between px-6`}
        >
          <div className={`flex items-center`}>
            {HeaderItem1.map((item) => (
              <div
                className={`px-3 py-2 rounded-md mr-1 bg-opacity-5 duration-300 cursor-pointer text-sm text-admin-bs-gray font-bold hover:text-admin-bs-primary hover:bg-admin-bs-primary hover:bg-opacity-5 flex items-center ${
                  item.isActive
                    ? 'bg-admin-bs-primary  text-admin-bs-primary'
                    : ''
                }`}
              >
                {item.hasBullet && (
                  <i
                    className={`duration-300 text-bullet fas fa-circle pr-3 ${
                      item.isActive ? 'text-admin-bs-primary' : ''
                    }`}
                  ></i>
                )}
                {item.icon && <i className={` ${item.icon} pr-3`}></i>}
                {item.title && <div className={` flex-1 `}>{item.title}</div>}
                {item.hasArrow && (
                  <p
                    className={`pl-4 duration-300 transform ${
                      item.isActive ? 'rotate-90' : ''
                    }`}
                  >
                    <i className={`fas fa-angle-right pr-4`}></i>
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className={`flex items-center`}></div>
        </div>
        <div className={`h-14 shadow-lg bg-admin-bs-white`}>fsdfads</div>
      </div>
      {/* Header */}
      {/* Main */}
      <div className={`Main pt-36 duration-300 ${isFull ? 'pl-72' : 'pl-20'}`}>
        <div className={`mx-7 bg-admin-bs-white shadow-md rounded-xl`}>
          to: '', title: 'Dashboard', icon: '', hasArrow: false, hasBullet:
          false, isActive: true,
        </div>
        <div className={`mx-7 bg-admin-bs-white shadow-md rounded-xl`}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className={`mx-7 bg-admin-bs-white shadow-md rounded-xl`}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className={`mx-7 bg-admin-bs-white shadow-md rounded-xl`}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className={`mx-7 bg-admin-bs-white shadow-md rounded-xl`}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      {/* Main */}
    </div>
  );
}

AdminLayout.propTypes = {};

export default AdminLayout;
