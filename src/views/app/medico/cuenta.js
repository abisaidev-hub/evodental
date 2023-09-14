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

import Breadcrumb from 'containers/navs/Breadcrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';

const Cuenta = ({ match }) => {
  const [activeTab, setActiveTab] = useState('detalles');
  const [isEditActive, setIsEditActive] = useState(false);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>Cuenta</h1>
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
                <DropdownItem disabled>
                  <IntlMessages id="pages.borrar-cuenta" />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => setIsEditActive(!isEditActive)}>
                  <IntlMessages id="pages.editar-cuenta" />
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
                      <p className="mb-3">Pete Davidson</p>
                      <p className="text-muted text-small mb-2">Rol</p>
                      <p className="mb-3">Doctor</p>
                      <p className="text-muted text-small mb-2">Género</p>
                      <p className="mb-3">Masculino</p>
                      <p className="text-muted text-small mb-2">
                        Fecha de nacimiento
                      </p>
                      <p className="mb-3">
                        16 de Marzo de 1999 &#8212; 24 años
                      </p>
                      <p className="text-muted text-small mb-2">Empresa</p>
                      <p className="mb-3">Evodicom</p>
                      <p className="text-muted text-small mb-2">
                        Número de télefono
                      </p>
                      <p className="mb-3">+52 123 454 3210</p>
                      <p className="text-muted text-small mb-2">Correo</p>
                      <p className="mb-3">pdavidson@evodicom.com</p>
                    </CardBody>
                  </Card>
                </Colxx>
              </Row>
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(Cuenta);
