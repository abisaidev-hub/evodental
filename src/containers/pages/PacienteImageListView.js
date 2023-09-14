import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';

const PacienteImageListView = ({
  doctor,
  defaultHeadshot,
  adminRoot,
  pathFixed,
}) => {
  return (
    <Colxx sm="6" lg="4" xl="3" className="mb-3" key={doctor.doctorId}>
      <NavLink
        to={`${adminRoot}/${
          pathFixed === 'medico' ? 'medico' : 'admin'
        }/doctor/${doctor.doctorId}`}
        className="d-block position-relative"
        key={doctor.doctorId}
      >
        <Card>
          <div className="position-relative">
            <CardImg
              top
              alt="Foto de perfil del doctor"
              src={doctor.img ? doctor.img : defaultHeadshot}
            />
          </div>
          <CardBody>
            <Row>
              <Colxx xxs="10" className="mb-3">
                <CardSubtitle>
                  {doctor?.name}&nbsp;{doctor?.lastName}
                </CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  {doctor.email}
                </CardText>
                <br />
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  {doctor.cosutltingRoom}
                </CardText>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
      </NavLink>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(PacienteImageListView);
