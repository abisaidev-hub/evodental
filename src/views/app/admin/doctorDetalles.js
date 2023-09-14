import React, { useState, useEffect } from 'react';
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
import { NavLink, useParams } from 'react-router-dom';
import classnames from 'classnames';
import { injectIntl } from 'react-intl';

import axios from 'axios';

import doctorHeadshot from 'assets/img/details/6.jpg';

import Breadcrumb from 'containers/navs/Breadcrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import ListaCasosDashboard from 'containers/pages/ListaCasosDashboard';

const PacienteDetalles = ({ match }) => {
  const [activeTab, setActiveTab] = useState('detalles');
  const [isEditActive, setIsEditActive] = useState(false);

  const apiEvo = `${process.env.API}/Doctors`;

  const { id } = useParams();

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios.get(`${apiEvo}/${id}`).then((res) => {
      setDoctor(res.data);
    });
  }, [id]);

  console.log(doctor);
  const { name, lastName, title, cosutltingRoom, phoneNumber, email } = doctor;

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>
            {name}&nbsp;{lastName}
          </h1>
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
                <DropdownItem divider />
                <DropdownItem>
                  <IntlMessages id="pages.borrar-medico" />
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
                <IntlMessages id="pages.detalles-doctor" />
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
                      src={doctorHeadshot}
                      alt="Foto de perfil del doctor"
                      className="card-img-top"
                    />

                    <CardBody>
                      <p className="text-muted text-small mb-2">Nombre</p>
                      <p className="mb-3">
                        {name}&nbsp;{lastName}
                      </p>
                      <p className="text-muted text-small mb-2">Especialidad</p>
                      <p className="mb-3">{title}</p>
                      <p className="text-muted text-small mb-2">Empresa</p>
                      <p className="mb-3">{cosutltingRoom}</p>
                      <p className="text-muted text-small mb-2">
                        Número de télefono
                      </p>
                      <p className="mb-3">+52 {phoneNumber}</p>
                      <p className="text-muted text-small mb-2">Correo</p>
                      <p className="mb-3">{email}</p>
                    </CardBody>
                  </Card>
                </Colxx>

                <Colxx xxs="12" lg="8">
                  <ListaCasosDashboard />
                </Colxx>
              </Row>
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(PacienteDetalles);
