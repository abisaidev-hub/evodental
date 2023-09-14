import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'reactstrap';
import classnames from 'classnames';
import { Colxx } from 'components/common/CustomBootstrap';

const CasoThumbListView = ({
  doctor,
  defaultHeadshot,
  adminRoot,
  pathFixed,
}) => {
  return (
    <Colxx xxs="12" key={doctor.doctorId} className="mb-3">
      <NavLink
        to={`${adminRoot}/${
          pathFixed === 'medico' ? 'medico' : 'admin'
        }/doctor/${doctor.doctorId}`}
        className="d-block position-relative"
        style={{ width: '100%' }}
        key={doctor.doctorId}
      >
        <Card className={classnames('d-flex flex-row')}>
          <img
            alt={doctor.name}
            src={doctor.img ? doctor.img : defaultHeadshot}
            className="list-thumbnail responsive border-0 card-img-left"
          />
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <p className="list-item-heading mb-1 truncate w-40">
                {doctor?.name}&nbsp;
                {doctor?.lastName}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {doctor?.email}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                +52&nbsp;
                {doctor?.phoneNumber}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {doctor?.cosutltingRoom}
              </p>
            </div>
          </div>
        </Card>
      </NavLink>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(CasoThumbListView);
