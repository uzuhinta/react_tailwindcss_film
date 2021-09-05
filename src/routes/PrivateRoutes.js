import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import AdminLayout from 'layouts/AdminLayout';
import Actor from 'pages/admin/Actors';

function PrivateRoutes(props) {
  useEffect(() => {
    document.title = 'Admin Dashboard';
  }, []);
  return (
    <Switch>
      <AdminLayout>
        <Route path="/actor" component={Actor} />
      </AdminLayout>
    </Switch>
  );
}

PrivateRoutes.propTypes = {};

export default PrivateRoutes;
