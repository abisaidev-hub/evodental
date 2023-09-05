import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

import ListaCasosDashboard from 'containers/pages/ListaCasosDashboard';

const Inicio = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.inicio" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <ListaCasosDashboard />
    </>
  );
};
export default injectIntl(Inicio);
