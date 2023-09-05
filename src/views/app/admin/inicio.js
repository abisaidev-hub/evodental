import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import CrearOpcion from 'components/cards/CrearOpcion';

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
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h2>Crear nuevo</h2>
        </Colxx>
        <Colxx lg="4" xl="4" className="mb-4">
          <a href="/app/admin/crear-caso" rel="noopener noreferrer">
            <CrearOpcion
              icon="iconsminds-newspaper"
              title="Caso"
              detail="Lorem Ipsum"
            />
          </a>
        </Colxx>
        <Colxx lg="4" xl="4" className="mb-4">
          <a href="/app/admin/crear-paciente" rel="noopener noreferrer">
            <CrearOpcion
              icon="iconsminds-male"
              title="Paciente"
              detail="Ipsum Dolor"
            />
          </a>
        </Colxx>
        <Colxx lg="4" xl="4" className="mb-4">
          <a href="/app/admin/crear-doctor" rel="noopener noreferrer">
            <CrearOpcion
              icon="iconsminds-doctor"
              title="Doctor"
              detail="Dolor Lorem"
            />
          </a>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <ListaCasosDashboard />
    </>
  );
};
export default injectIntl(Inicio);
