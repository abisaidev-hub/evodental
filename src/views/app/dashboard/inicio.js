import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import GradientCardContainer from 'containers/dashboards/GradientCardContainer';
import GradientWithRadialProgressCard from 'components/cards/GradientWithRadialProgressCard';
import CrearOpcion from 'components/cards/CrearOpcion';

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
        <Colxx lg="4" xl="12" className="mb-4">
          <a href="/dashboard/dashboard/crear-caso" rel="noopener noreferrer">
            <CrearOpcion
              icon="iconsminds-newspaper"
              title="Caso"
              detail="Lorem Ipsum"
            />
          </a>
        </Colxx>
        <Colxx lg="4" xl="12" className="mb-4">
          <a
            href="/dashboard/dashboard/crear-paciente"
            rel="noopener noreferrer"
          >
            <CrearOpcion
              icon="iconsminds-male"
              title="Paciente"
              detail="Ipsum Dolor"
            />
          </a>
        </Colxx>
        <Colxx lg="4" xl="12" className="mb-4">
          <a
            href="/dashboard/dashboard/crear-ortodoncista"
            rel="noopener noreferrer"
          >
            <CrearOpcion
              icon="iconsminds-doctor"
              title="Ortodoncista"
              detail="Dolor Lorem"
            />
          </a>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h2>Crear nuevo</h2>
        </Colxx>
        <Colxx lg="4" xl="12" className="mb-4">
          <GradientWithRadialProgressCard
            icon="iconsminds-clock"
            title="Caso"
            detail="Detalles"
            percent={(5 * 100) / 12}
            progressText="5/12"
          />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h2>Crear nuevo</h2>
        </Colxx>
        <Colxx md="6" lg="4" className="mb-4">
          <GradientCardContainer />
        </Colxx>
        <Colxx md="6" lg="4" className="mb-4">
          <GradientCardContainer />
        </Colxx>
        <Colxx md="6" lg="4" className="mb-4">
          <GradientCardContainer />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h2>Lista de casos</h2>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(Inicio);
