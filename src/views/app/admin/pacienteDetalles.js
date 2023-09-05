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
import NewComments from 'containers/dashboards/NewComments';
import ListaCasosDashboard from 'containers/pages/ListaCasosDashboard';

const PacienteDetalles = ({ match }) => {
  const [activeTab, setActiveTab] = useState('detalles');
  const [isEditActive, setIsEditActive] = useState(false);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>Detalles del paciente</h1>
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
                  <IntlMessages id="pages.editar-paciente" />
                </DropdownItem>
                <DropdownItem disabled>
                  <IntlMessages id="pages.borrar-paciente" />
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
                  active: activeTab === 'lorem',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('lorem')}
              >
                <IntlMessages id="pages.lorem" />
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
                      <p className="mb-3">John Doe</p>
                      <p className="text-muted text-small mb-2">Género</p>
                      <p className="mb-3">Masculino</p>
                      <p className="text-muted text-small mb-2">
                        Fecha de nacimiento
                      </p>
                      <p className="mb-3">
                        18 de Septiembre del 1991 &#8212; 31 años
                      </p>
                      <p className="text-muted text-small mb-2">Edad</p>
                      <p className="mb-3">31 años</p>
                      <p className="text-muted text-small mb-2">Ciudad</p>
                      <p className="mb-3">Ensenada, Baja California</p>
                      <p className="text-muted text-small mb-2">
                        Número de télefono
                      </p>
                      <p className="mb-3">+52 098 765 4321</p>
                      <p className="text-muted text-small mb-2">Correo</p>
                      <p className="mb-3">doeee.john91@gmail.com</p>
                      <p className="text-muted text-small mb-2">
                        Total de casos
                      </p>
                      <p className="mb-3">7</p>
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
            <TabPane tabId="lorem">
              <NewComments className="mb-4" displayRate />
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(PacienteDetalles);
