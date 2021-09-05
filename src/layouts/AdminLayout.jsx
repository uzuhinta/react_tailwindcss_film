import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AdminImages from 'constant/AdminImages';
import { Link } from 'react-router-dom';
import Aside from 'components/Admin/Aside/Aside';
import Header from 'components/Admin/Header/Header';
import MainWrapper from 'components/Admin/MainWrapper/MainWrapper';
import { useSelector } from 'react-redux';

function AdminLayout(props) {
  const isFull = useSelector(state => state.aside.isFull);

  return (
    <div className={`bg-admin-bs-bg`}>
      <Aside/>
      <Header/>
      <MainWrapper>fafdsf</MainWrapper>
    </div>
  );
}

AdminLayout.propTypes = {};

export default AdminLayout;
