import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AdminImages from 'constant/AdminImages';
import { Link } from 'react-router-dom';
import AsideMenuItem from 'components/Aside/AsideMenuItem';
import AsideMenuWithSub from 'components/Aside/AsideMenuWithSub';

// const AsideMenuItem = {
//   to: '',
//   title: '',
//   icon: '',
//   fontIcon: '',
//   hasArrow: false,
//   hasBullet: false,
// };

const AsideMenuTitleWithSub = {
  to: '',
  title: '',
  icon: '',
  fontIcon: '',
  hasArrow: false,
  hasBullet: false,
};

const DBMenuItem = {
  to: '/',
  title: 'Dashboard',
  icon: 'fas fa-tachometer-alt',
  // icon: false,
  hasArrow: false,
  hasBullet: false,
  isActive: false,
};

const PagesMenuItemWithSub = {
  to: '/',
  title: 'Pages',
  // icon: 'fas fa-compress',
  hasArrow: true,
  hasBullet: true,
  isActive: false,
};

function AdminLayout(props) {
  let [isClickMenu, setIsClickMenu] = useState(true);
  let [isHoverSidebar, setIsHoverSidebar] = useState(true);
  let isFull = isClickMenu || isHoverSidebar;
  console.log(isClickMenu);
  return (
    <div className={`bg-admin-bs-bg`}>
      {/* Sidebar */}
      <div
        onMouseOver={() => setIsHoverSidebar(true)}
        onMouseLeave={() => setIsHoverSidebar(false)}
        className={`SideBar fixed top-0 left-0 ${
          isFull ? 'w-72' : 'w-20'
        } duration-300 h-screen bg-admin-bs-dark shadow z-50 hover:w-72 overflow-x-hidden`}
      >
        {/* LOGO */}
        <div
          className={`LOGO bg-admin-bs-darker flex items-center ${
            isFull ? 'justify-between' : 'justify-center'
          }  h-16`}
        >
          <div className={`h-5 ${isFull ? 'block' : 'hidden'} `}>
            <img
              className={`h-full px-4 cursor-pointer `}
              src={AdminImages.LOGO}
              alt="logo"
            />
          </div>
          <div className={`h-5`}>
            <i
              onClick={() => setIsClickMenu(!isClickMenu)}
              className={`px-4 m-auto cursor-pointer hover:text-admin-bs-gray duration-300 text-xl text-admin-bs-bg transform fas fa-arrow-circle-left ${
                isClickMenu ? '' : 'rotate-180'
              }`}
            ></i>
          </div>
        </div>
        {/* LOGO */}
        {/* Aside Menu Item */}
        <AsideMenuItem
          isFull={isFull}
          to="/"
          title="Dashboard"
          icon="fas fa-tachometer-alt"
        />
        <AsideMenuItem
          isFull={isFull}
          to="/"
          title="Dashboard"
          icon="fas fa-gamepad"
        />
        {/* Aside Menu Item */}
        {/* Devide  */}
        <div
          className={`mt-4 mb-1 pl-3 text-admin-bs-gray uppercase tracking-wider text-sm`}
        >
          <span className={`duration-200 ${isFull ? '' : 'invisible'}`}>
            Crafted
          </span>
        </div>
        {/* Devide  */}
        {/* Aside menu with sub */}
        <AsideMenuWithSub
          isFull={isFull}
          to="/"
          title="Dashboard"
          icon="fas fa-gamepad"
          hasArrow
          isActive
        >
          <AsideMenuItem
            isFull={isFull}
            to="/"
            title="Dashboard"
            // icon="fas fa-tachometer-alt"
            hasBullet
          />
        </AsideMenuWithSub>
        <div>
          <div
            className={`group text-admin-bs-gray cursor-pointer flex items-center pl-7 py-1 ${
              PagesMenuItemWithSub.isActive ? 'bg-admin-bs-darker' : ''
            }`}
          >
            {PagesMenuItemWithSub.icon && (
              <i
                className={`group-hover:text-admin-bs-white duration-300 pr-4 ${
                  PagesMenuItemWithSub.icon
                } ${
                  PagesMenuItemWithSub.isActive ? 'text-admin-bs-white' : ''
                } text-xl`}
              ></i>
            )}
            {PagesMenuItemWithSub.hasBullet && (
              <i
                className={`group-hover:text-admin-bs-white text-bullet fas fa-circle pr-3 ${
                  PagesMenuItemWithSub.isActive ? 'text-admin-bs-white' : ''
                }`}
              ></i>
            )}
            {PagesMenuItemWithSub.title && isFull && (
              <p
                className={`group-hover:text-admin-bs-white duration-300 flex-1 ${
                  PagesMenuItemWithSub.isActive ? 'text-admin-bs-white' : ''
                }`}
              >
                {PagesMenuItemWithSub.title}
              </p>
            )}
            {PagesMenuItemWithSub.hasArrow && isFull && (
              <p
                className={`group-hover:text-admin-bs-white pl-4 duration-300 transform ${
                  PagesMenuItemWithSub.isActive
                    ? 'text-admin-bs-white rotate-90'
                    : ''
                }`}
              >
                <i className={`fas fa-angle-right pr-4`}></i>
              </p>
            )}
          </div>
          {PagesMenuItemWithSub.isActive && (
            <div
              className={`pl-3 ${
                PagesMenuItemWithSub.isActive ? 'bg-admin-bs-darker' : ''
              }`}
            >
              <div
                className={`group text-admin-bs-gray cursor-pointer flex items-center pl-7 py-1 ${
                  PagesMenuItemWithSub.isActive ? 'bg-admin-bs-darker' : ''
                }`}
              >
                {PagesMenuItemWithSub.icon && (
                  <i
                    className={`group-hover:text-admin-bs-white duration-300 ${
                      PagesMenuItemWithSub.icon
                    } ${
                      PagesMenuItemWithSub.isActive ? 'text-admin-bs-white' : ''
                    } text-xl`}
                  ></i>
                )}
                {PagesMenuItemWithSub.hasBullet && (
                  <i
                    className={`group-hover:text-admin-bs-white text-bullet fas fa-circle pr-3 ${
                      PagesMenuItemWithSub.isActive ? 'text-admin-bs-white' : ''
                    }`}
                  ></i>
                )}
                {PagesMenuItemWithSub.title && isFull && (
                  <p
                    className={`group-hover:text-admin-bs-white duration-300 flex-1 ${
                      PagesMenuItemWithSub.isActive ? 'text-admin-bs-white' : ''
                    }`}
                  >
                    {PagesMenuItemWithSub.title}
                  </p>
                )}
                {PagesMenuItemWithSub.hasArrow && isFull && (
                  <p
                    className={`group-hover:text-admin-bs-white pl-4 duration-300 transform ${
                      PagesMenuItemWithSub.isActive
                        ? 'text-admin-bs-white rotate-90'
                        : ''
                    }`}
                  >
                    <i className={`fas fa-angle-right pr-4`}></i>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        {/* Aside menu with sub */}
      </div>
      {/* Sidebar */}

      {/* Header */}
      <div
        className={`Header fixed top-0 right-0 w-full z-40 duration-300 ${
          isFull ? 'pl-72' : 'pl-20'
        }`}
      >
        <div
          className={`TOP-HEADER h-16 border-b bg-red-500 border-admin-bs-secondary `}
        >
          iiiiiiiiiiii
        </div>
        <div className={`h-14 shadow-lg bg-admin-bs-white`}>fsdfads</div>
      </div>
      {/* Header */}
      {/* Main */}
      <div className={`Main pt-36 duration-300 ${isFull ? 'pl-72' : 'pl-20'}`}>
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
