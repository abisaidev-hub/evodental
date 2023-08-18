import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CentroDeAyuda = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './centroDeAyuda')
);
const Soporte = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/centro-de-ayuda`}
      />
      <Route
        path={`${match.url}/centro-de-ayuda`}
        render={(props) => <CentroDeAyuda {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Soporte;
