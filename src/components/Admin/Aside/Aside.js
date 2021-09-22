import AdminImages from 'constant/AdminImages';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsideMenuItem from './AsideMenuItem';
import AsideMenuWithSub from './AsideMenuWithSub';
import { toggleAside } from './asideSlide';

function Aside(props) {
  const isFull = useSelector((state) => state.aside.isFull);

  let [isClickMenu, setIsClickMenu] = useState(isFull);
  let [isHoverSidebar, setIsHoverSidebar] = useState(isFull);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('in side bar ' + isFull);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouse = (isOver) => {
    setIsHoverSidebar(isOver);
    dispatch(toggleAside(isOver || isClickMenu));
  };

  const handleClick = (isClick) => {
    setIsClickMenu(isClick);
    dispatch(toggleAside(isClick || isHoverSidebar));
  };

  return (
    <div
      onMouseOver={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
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
            onClick={() => handleClick(!isClickMenu)}
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
        to="/admin/dashboard"
        title="Dashboard"
        icon="fas fa-tachometer-alt"
      />
      <AsideMenuItem
        isFull={isFull}
        to="/actor"
        title="Actor"
        icon="fas fa-gamepad"
      />
      {/* Aside Menu Item */}
      {/* Devide  */}
      <div
        className={`pt-2.5 mb-1 pl-2.5 text-admin-bs-gray uppercase tracking-wider text-xs`}
      >
        <span className={`${isFull ? '' : 'invisible'}`}>
          Crafted
        </span>
      </div>
      {/* Devide  */}
      {/* Aside menu with sub */}
      <AsideMenuWithSub
        isFull={isFull}
        title="Actor"
        icon="fas fa-id-badge"
        hasArrow
        isActive
      >
        <AsideMenuItem
          isFull={isFull}
          to="/admin/actor"
          title="Summary"
          // icon="fas fa-tachometer-alt"
          hasBullet
        />
        <AsideMenuItem
          isFull={isFull}
          to="/admin/actor/add"
          title="Add"
          // icon="fas fa-tachometer-alt"
          hasBullet
        />
      </AsideMenuWithSub>

      <AsideMenuWithSub
        isFull={isFull}
        to="/"
        title="Dashboard"
        icon="fas fa-gamepad"
        hasArrow
      >
        <AsideMenuWithSub
          isFull={isFull}
          to="/"
          title="Dashboard"
          icon="fas fa-gamepad"
          hasArrow
        >
          <AsideMenuWithSub
            isFull={isFull}
            to="/"
            title="Dashboard"
            icon="fas fa-gamepad"
            hasArrow
            isActive
          ></AsideMenuWithSub>
        </AsideMenuWithSub>
      </AsideMenuWithSub>

      {/* Aside menu with sub */}
    </div>
  );
}

Aside.propTypes = {};

export default Aside;
