import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AdminImages from 'constant/AdminImages';
import { Link } from 'react-router-dom';
import AsideMenuItem from 'components/Aside/AsideMenuItem';
import AsideMenuWithSub from 'components/Aside/AsideMenuWithSub';
import Aside from 'components/Aside/Aside';

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
          className={`TOP-HEADER h-16 border-b border-admin-bs-secondary bg-admin-bs-white flex items-center px-6`}
        >
          <button onClick={() => console.log(isFull)}>log</button>
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
