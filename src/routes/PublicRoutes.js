import MasterLayout from 'layouts/MasterLayout';
import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router';

const NotFound = lazy(() => import('components/NotFound'));
const HomePage = lazy(() => import('pages/HomePage'));
const TypePage = lazy(() => import('pages/TypePage'));
const DetailPage = lazy(() => import('pages/DetailPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

// function PublicRoutes(props) {
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       {/* <Switch> */}
//         <Route path="/" exact>
//           <MasterLayout>
//             <HomePage />
//           </MasterLayout>
//         </Route>
//         <Route path="/type/:type">
//           <MasterLayout>
//             <TypePage />
//           </MasterLayout>
//         </Route>
//         <Route path="/detail/:film">
//           <MasterLayout>
//             <DetailPage />
//           </MasterLayout>
//         </Route>
//         <Route path="/admin/login">
//           <LoginPage />
//         </Route>
//         {/* <Route component={NotFound} /> */}
//       {/* </Switch> */}
//     </Suspense>
//   );
// }

function PublicRoutes({ children, ...rest }) {
  return <Suspense fallback={<h2>Loading...</h2>}>{children}</Suspense>;
}

PublicRoutes.propTypes = {};

export default PublicRoutes;
