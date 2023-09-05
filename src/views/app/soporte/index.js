import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CentroDeAyuda = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './centroDeAyuda')
);
const Lorem = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './lorem')
);
const Ipsum = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './ipsum')
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
      <Route
        path={`${match.url}/lorem`}
        render={(props) => <Lorem {...props} />}
      />
      <Route
        path={`${match.url}/ipsum`}
        render={(props) => <Ipsum {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Soporte;
