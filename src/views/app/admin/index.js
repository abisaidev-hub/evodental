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
const CrearDoctor = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './crearDoctor')
);
const Casos = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './casos')
);
const Pacientes = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './pacientes')
);
const Doctores = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './doctores')
);
const Lorem = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './lorem')
);
const Ipsum = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './ipsum')
);
const PacienteDetalles = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './pacienteDetalles')
);
const DoctorDetalles = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './doctorDetalles')
);
const CasoDetalles = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './casoDetalles')
);
const Cuenta = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './cuenta')
);

const Admin = ({ match }) => (
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
        path={`${match.url}/crear-doctor`}
        render={(props) => <CrearDoctor {...props} />}
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
        path={`${match.url}/doctores`}
        render={(props) => <Doctores {...props} />}
      />
      <Route
        path={`${match.url}/lorem`}
        render={(props) => <Lorem {...props} />}
      />
      <Route
        path={`${match.url}/ipsum`}
        render={(props) => <Ipsum {...props} />}
      />
      <Route
        path={`${match.url}/paciente`}
        render={(props) => <PacienteDetalles {...props} />}
      />
      <Route
        path={`${match.url}/doctor`}
        render={(props) => <DoctorDetalles {...props} />}
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
export default Admin;
