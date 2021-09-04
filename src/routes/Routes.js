import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
const PrivateRoutes = lazy(() => import('./PrivateRoutes'));

function Routes(props) {
  const isAuthorized = true;
  return (
    <Switch>
      {!isAuthorized ? (
        /* public route */
        <Route>
          <PublicRoutes />
        </Route>
      ) : (
        /* private route */
        <PrivateRoutes />
      )}
    </Switch>
  );
}

Routes.propTypes = {};

export default Routes;
