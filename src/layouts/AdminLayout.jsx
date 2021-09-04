import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AdminImages from 'constant/AdminImages';
import { Link } from 'react-router-dom';
import AsideMenuItem from 'components/Admin/Aside/AsideMenuItem';
import AsideMenuWithSub from 'components/Admin/Aside/AsideMenuWithSub';
import Aside from 'components/Admin/Aside/Aside';
import HeaderMenuItem from 'components/Admin/Header/HeaderMenuItem';
import HeaderMenuWithSub from 'components/Admin/Header/HeaderMenuWithSub';
import TopHeader from 'components/Admin/Header/TopHeader';

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
      <TopHeader isFull={isFull} />
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
