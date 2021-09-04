import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import AdminLayout from 'layouts/AdminLayout';

function PrivateRoutes(props) {
  useEffect(() => {
    document.title = 'Admin Dashboard';
  }, []);
  return (
    <Switch>
      <Route>
        <AdminLayout />
      </Route>
    </Switch>
  );
}

PrivateRoutes.propTypes = {};

export default PrivateRoutes;
