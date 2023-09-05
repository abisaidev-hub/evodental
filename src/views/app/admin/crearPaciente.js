import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

import FormPaciente from 'containers/form-validations/FormPaciente';

const CrearPaciente = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.crear-paciente" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xs="12" md="6" className="mb-3">
          <FormPaciente />
        </Colxx>
      </Row>
    </>
  );
};

export default CrearPaciente;
