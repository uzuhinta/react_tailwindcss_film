import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// function PrivateRoutes(props) {
//   useEffect(() => {
//     document.title = 'Admin Dashboard';
// eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <Switch>
//       <AdminLayout>
//         <Route path="/admin/actor" component={Actor} />
//       </AdminLayout>
//     </Switch>
//   );
// }0
function PrivateRoutes({ children, ...rest }) {
  let auth = true;
  console.log(132132132);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
}

PrivateRoutes.propTypes = {};

export default PrivateRoutes;
