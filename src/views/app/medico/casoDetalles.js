import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  CardHeader,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { injectIntl } from 'react-intl';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import GlideComponentThumbs from 'components/carousel/GlideComponentThumbs';
import { detailImages, detailThumbs } from 'data/carouselItems';

const DetailsPages = ({ match }) => {
  const [activeTab, setActiveTab] = useState('detalles');
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>John Doe &#8212; 31 años</h1>
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
                <DropdownItem>
                  <IntlMessages id="pages.editar-caso" />
                </DropdownItem>
                <DropdownItem disabled>
                  <IntlMessages id="pages.borrar-caso" />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <IntlMessages id="pages.cerrar-caso" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>

          <Breadcrumb match={match} />
          <Separator className="mb-5" />

          <Row>
            <Colxx xxs="12" xl="8" className="col-left">
              <Card className="mb-4">
                <CardBody>
                  <GlideComponentThumbs
                    settingsImages={{
                      bound: true,
                      rewind: false,
                      focusAt: 0,
                      startAt: 0,
                      gap: 5,
                      perView: 1,
                      data: detailImages,
                    }}
                    settingsThumbs={{
                      bound: true,
                      rewind: false,
                      focusAt: 0,
                      startAt: 0,
                      gap: 10,
                      perView: 5,
                      data: detailThumbs,
                      breakpoints: {
                        576: {
                          perView: 4,
                        },
                        420: {
                          perView: 3,
                        },
                      },
                    }}
                  />
                </CardBody>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <Nav tabs className="card-header-tabs ">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 'detalles',
                          'nav-link': true,
                        })}
                        onClick={() => setActiveTab('detalles')}
                        to="#"
                        location={{}}
                      >
                        <IntlMessages id="pages.detalles" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>

                <TabContent activeTab={activeTab} xl="4">
                  <TabPane tabId="detalles">
                    <Row>
                      <Colxx sm="12">
                        <CardBody>
                          <p className="font-weight-bold">
                            Detalles del paciente
                          </p>
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
                          <p className="text-muted text-small mb-2">Ciudad</p>
                          <p className="mb-3">Ensenada, Baja California</p>
                          <p className="text-muted text-small mb-2">
                            Número de télefono
                          </p>
                          <p className="mb-3">+52 098 765 4321</p>
                          <p className="text-muted text-small mb-2">Correo</p>
                          <p className="mb-3">doeee.john91@gmail.com</p>
                        </CardBody>
                      </Colxx>
                    </Row>
                    <Row>
                      <Colxx>
                        <CardBody>
                          <p className="font-weight-bold">
                            Acciones adicionales
                          </p>
                          <Button color="primary" href="#" className="mb-2">
                            <i className="iconsminds-download-1" />
                            &nbsp;&nbsp;&nbsp;Descargar radiografías
                          </Button>
                          <br />
                          <Button color="primary" href="#" className="mb-2">
                            <i className="iconsminds-mail-forward" />
                            &nbsp;&nbsp;&nbsp;Enviar radiografías por correo
                          </Button>
                          <br />
                          <Button color="primary" className="mb-2">
                            <i className="simple-icon-call-out" />
                            &nbsp;&nbsp;&nbsp;Hacer llamada a paciente
                          </Button>
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                </TabContent>
              </Card>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(DetailsPages);
