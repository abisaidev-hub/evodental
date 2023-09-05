import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { injectIntl } from 'react-intl';
import Rating from 'components/common/Rating';

import Breadcrumb from 'containers/navs/Breadcrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import SmallLineCharts from 'containers/dashboards/SmallLineCharts';
import WebsiteVisitsChartCard from 'containers/dashboards/WebsiteVisitsChartCard';
import ListaCasosDashboard from 'containers/pages/ListaCasosDashboard';

const PacienteDetalles = ({ match }) => {
  const [activeTab, setActiveTab] = useState('detalles');
  const [isEditActive, setIsEditActive] = useState(false);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>Detalles del doctor</h1>
          <div className="text-zero top-right-button-container">
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                color="primary"
                size="lg"
                outline
                className="top-right-button top-right-button-single"
              >
                <IntlMessages id="pages.options-title" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setIsEditActive(!isEditActive)}>
                  <IntlMessages id="pages.editar-medico" />
                </DropdownItem>
                <DropdownItem disabled>
                  <IntlMessages id="pages.borrar-medico" />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <IntlMessages id="pages.another-action" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>

          <Breadcrumb match={match} />

          <Nav tabs className="separator-tabs ml-0 mb-5">
            <NavItem>
              <NavLink
                location={{}}
                to="#"
                className={classnames({
                  active: activeTab === 'detalles',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('detalles')}
              >
                <IntlMessages id="pages.detalles" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                location={{}}
                to="#"
                className={classnames({
                  active: activeTab === 'estadisticas',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('estadisticas')}
              >
                <IntlMessages id="pages.estadisticas" />
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="detalles">
              <Row>
                <Colxx xxs="12" lg="4" className="mb-4">
                  <Card className="mb-4">
                    {isEditActive && (
                      <div className="position-absolute card-top-buttons">
                        <Button outline color="white" className="icon-button">
                          <i className="simple-icon-pencil" />
                        </Button>
                      </div>
                    )}
                    <img
                      src="/assets/img/details/1.jpg"
                      alt="Detail"
                      className="card-img-top"
                    />

                    <CardBody>
                      <p className="text-muted text-small mb-2">Nombre</p>
                      <p className="mb-3">Anna Wilson</p>
                      <p className="text-muted text-small mb-2">Especialidad</p>
                      <p className="mb-3">Ortodoncista</p>
                      <p className="text-muted text-small mb-2">Género</p>
                      <p className="mb-3">Femenino</p>
                      <p className="text-muted text-small mb-2">
                        Fecha de nacimiento
                      </p>
                      <p className="mb-3">
                        24 de Abril del 1987 &#8212; 35 años
                      </p>
                      <p className="text-muted text-small mb-2">Edad</p>
                      <p className="mb-3">35 años</p>
                      <p className="text-muted text-small mb-2">Dirección</p>
                      <p className="mb-3">
                        Avenida Aras #17, Ensenada, Baja California
                      </p>
                      <p className="text-muted text-small mb-2">
                        Número de télefono
                      </p>
                      <p className="mb-3">+52 123 456 7890</p>
                      <p className="text-muted text-small mb-2">Correo</p>
                      <p className="mb-3">awilson@evodental.com</p>
                      <p className="text-muted text-small mb-2">
                        Total de casos
                      </p>
                      <p className="mb-3">47</p>
                      <p className="text-muted text-small mb-2">
                        Total de pacientes
                      </p>
                      <p className="mb-3">32</p>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.rating" />
                      </p>
                      <div className="mb-3">
                        <Rating total={5} rating={5} interactive={false} />
                      </div>
                    </CardBody>
                  </Card>
                </Colxx>

                <Colxx xxs="12" lg="8">
                  <ListaCasosDashboard />
                </Colxx>
              </Row>
            </TabPane>
            <TabPane tabId="estadisticas">
              <SmallLineCharts itemClass="dashboard-small-chart-analytics" />
              <WebsiteVisitsChartCard className="mb-4" controls={false} />
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(PacienteDetalles);
