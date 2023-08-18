import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Inicio = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './inicio')
);
const CrearCaso = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './crearCaso')
);
const CrearPaciente = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './crearPaciente')
);
const CrearOrtodoncista = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './crearOrtodoncista')
);
const Casos = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './casos')
);
const Pacientes = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './pacientes')
);
const Ortodoncistas = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './ortodoncistas')
);
const Lorem = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './lorem')
);
const Ipsum = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './ipsum')
);

const Dashboard = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/inicio`} />
      <Route
        path={`${match.url}/inicio`}
        render={(props) => <Inicio {...props} />}
      />
      <Route
        path={`${match.url}/crear-caso`}
        render={(props) => <CrearCaso {...props} />}
      />
      <Route
        path={`${match.url}/crear-paciente`}
        render={(props) => <CrearPaciente {...props} />}
      />
      <Route
        path={`${match.url}/crear-ortodoncista`}
        render={(props) => <CrearOrtodoncista {...props} />}
      />
      <Route
        path={`${match.url}/casos`}
        render={(props) => <Casos {...props} />}
      />
      <Route
        path={`${match.url}/pacientes`}
        render={(props) => <Pacientes {...props} />}
      />
      <Route
        path={`${match.url}/ortodoncistas`}
        render={(props) => <Ortodoncistas {...props} />}
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
export default Dashboard;
