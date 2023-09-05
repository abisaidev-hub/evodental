import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';

const Admin = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './admin')
);
const Medico = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './medico')
);
const Soporte = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './soporte')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/admin`} />
            <Route
              path={`${match.url}/admin`}
              render={(props) => <Admin {...props} />}
            />
              <Route
    path={`${match.url}/medico`}
    render={(props) => <Medico {...props} />}
  />
            <Route
              path={`${match.url}/soporte`}
              render={(props) => <Soporte {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
