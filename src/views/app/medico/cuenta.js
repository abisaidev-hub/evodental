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
  Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { injectIntl } from 'react-intl';
import Rating from 'components/common/Rating';

import Breadcrumb from 'containers/navs/Breadcrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import RadialProgressCard from 'components/cards/RadialProgressCard';
import NewComments from 'containers/dashboards/NewComments';
import Orders from 'containers/pages/Orders';

const Cuenta = ({ match, intl }) => {
  const [activeTab, setActiveTab] = useState('detalles');
  const [isEditActive, setIsEditActive] = useState(false);

  const { messages } = intl;

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
                <DropdownItem onClick={() => setIsEditActive(!isEditActive)}>
                  <IntlMessages id="pages.editar-cuenta" />
                </DropdownItem>
                <DropdownItem disabled>
                  <IntlMessages id="pages.borrar-cuenta" />
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
            <NavItem>
              <NavLink
                location={{}}
                to="#"
                className={classnames({
                  active: activeTab === 'ipsum',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('ipsum')}
              >
                <IntlMessages id="pages.ipsum" />
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
                      <p className="mb-3">Técnico</p>
                      <p className="text-muted text-small mb-2">Género</p>
                      <p className="mb-3">Masculino</p>
                      <p className="text-muted text-small mb-2">
                        Fecha de nacimiento
                      </p>
                      <p className="mb-3">
                        16 de Marzo del 1999 &#8212; 24 años
                      </p>
                      <p className="text-muted text-small mb-2">Edad</p>
                      <p className="mb-3">24 años</p>
                      <p className="text-muted text-small mb-2">Empresa</p>
                      <p className="mb-3">Evodicom</p>
                      <p className="text-muted text-small mb-2">
                        Número de télefono
                      </p>
                      <p className="mb-3">+52 123 454 3210</p>
                      <p className="text-muted text-small mb-2">Correo</p>
                      <p className="mb-3">pdavidson@evodicom.com</p>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.rating" />
                      </p>
                      <div className="mb-3">
                        <Rating total={5} rating={5} interactive={false} />
                      </div>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.ingredients" />
                      </p>
                      <div className="mb-3">
                        <p className="d-sm-inline-block mb-1">
                          <Badge color="outline-secondary mb-1 mr-1" pill>
                            Flour
                          </Badge>
                          <Badge color="outline-secondary mb-1 mr-1" pill>
                            Chocolate
                          </Badge>
                          <Badge color="outline-secondary mb-1 mr-1" pill>
                            Caster Sugar
                          </Badge>
                          <Badge color="outline-secondary mb-1 mr-1" pill>
                            Baking Powder
                          </Badge>
                          <Badge color="outline-secondary mb-1 mr-1" pill>
                            Milk
                          </Badge>
                          <Badge color="outline-secondary mb-1 mr-1" pill>
                            Eggs
                          </Badge>
                          <Badge color="outline-secondary mb-1 mr-1" pill>
                            Vegetable Oil
                          </Badge>
                        </p>
                      </div>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.is-vegan" />
                      </p>
                      <p>No</p>
                    </CardBody>
                  </Card>
                  <Row>
                    <Colxx xxs="12" className="mb-4">
                      <RadialProgressCard
                        className="mb-4"
                        title={messages['pages.order-status']}
                        percent={85}
                        isSortable={false}
                      />
                    </Colxx>
                    <Colxx xxs="12" className="mb-4">
                      <RadialProgressCard
                        className="mb-4"
                        title={messages['pages.order-status']}
                        percent={40}
                        isSortable={false}
                      />
                    </Colxx>
                  </Row>
                </Colxx>

                <Colxx xxs="12" lg="8">
                  <NewComments className="mb-4" displayRate />
                </Colxx>
              </Row>
            </TabPane>
            <TabPane tabId="casos">
              <Orders />
            </TabPane>
            <TabPane tabId="pacientes">
              <Orders />
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(Cuenta);
