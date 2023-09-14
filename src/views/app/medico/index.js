import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Inicio = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './inicio')
);
const CasoDetalles = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './casoDetalles')
);
const Cuenta = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './cuenta')
);

const Medico = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/inicio`} />
      <Route
        path={`${match.url}/inicio`}
        render={(props) => <Inicio {...props} />}
      />
      <Route
        path={`${match.url}/caso`}
        render={(props) => <CasoDetalles {...props} />}
      />
      <Route
        path={`${match.url}/cuenta`}
        render={(props) => <Cuenta {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Medico;
