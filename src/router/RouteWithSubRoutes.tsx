import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from './config';

const RouteWithSubRoutes = (route: IRoute) => {
  const {
    fallback, component, path, redirect, routes,
  } = route;
  return (
    <Suspense fallback={fallback}>
      <Route
        path={path}
        render={(props) => (redirect ? <Redirect to={redirect} />
          : component && <component {...props} routes={routes} />)}
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
