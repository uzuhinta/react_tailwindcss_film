import Aside from 'components/Admin/Aside/Aside';
import Header from 'components/Admin/Header/Header';
import MainWrapper from 'components/Admin/MainWrapper/MainWrapper';
import React from 'react';
import { useSelector } from 'react-redux';

function AdminLayout(props) {
  const isFull = useSelector((state) => state.aside.isFull);

  return (
    <div className={`bg-admin-bs-bg min-h-screen`}>
      <Aside />
      <Header />
      <MainWrapper>{props.children}</MainWrapper>
    </div>
  );
}

AdminLayout.propTypes = {};

export default AdminLayout;
