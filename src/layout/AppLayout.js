import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useLocation } from 'react-router-dom';

import TopNav from 'containers/navs/Topnav';
import Sidebar from 'containers/navs/Sidebar';
import Footer from 'containers/navs/Footer';

const AppLayout = ({ containerClassnames, children, history }) => {
  const location = useLocation();
  const path = location.pathname;
  const paths = path.split('/');
  const pathFixed = paths[2];
  return (
    <div id="app-container" className={containerClassnames}>
      <TopNav history={history} />
      {pathFixed === 'admin' && <Sidebar />}
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);
