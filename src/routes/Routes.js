import MasterLayout from 'layouts/MasterLayout';
import Actor from 'pages/admin/Actors';
import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// Public
const NotFound = lazy(() => import('components/NotFound'));
const HomePage = lazy(() => import('pages/HomePage'));
const TypePage = lazy(() => import('pages/TypePage'));
const DetailPage = lazy(() => import('pages/DetailPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

// Private
const PrivateRoutes = lazy(() => import('./PrivateRoutes'));
const AdminLayout = lazy(() => import('layouts/AdminLayout'));
const Dashboard = lazy(() => import('pages/admin/Dashboard'));

function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <MasterLayout>
          <HomePage />
        </MasterLayout>
      </Route>
      <Route path="/type/:type">
        <MasterLayout>
          <TypePage />
        </MasterLayout>
      </Route>
      <Route path="/detail/:film">
        <MasterLayout>
          <DetailPage />
        </MasterLayout>
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <PrivateRoutes path="/admin/*">
        <AdminLayout>
          <Route path="/admin/actor" component={Actor} />
          <Route path="/admin/dashboard" component={Dashboard} />
        </AdminLayout>
      </PrivateRoutes>
      <Route component={NotFound} />
    </Switch>
  );
}

Routes.propTypes = {};

export default Routes;
