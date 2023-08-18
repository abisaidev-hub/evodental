import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

import FormMedico from 'containers/form-validations/FormMedico';

const CrearOrtodoncista = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.crear-ortodoncista" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xs="12" md="6" className="mb-3">
          <FormMedico />
        </Colxx>
      </Row>
    </>
  );
};

export default CrearOrtodoncista;
