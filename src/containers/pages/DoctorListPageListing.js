import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row } from 'reactstrap';
import { adminRoot } from 'constants/defaultValues';
import doctorHeadshot from 'assets/img/details/6.jpg';
import Pagination from './Pagination';
import DoctorDataListView from './DoctorDataListView';
import DoctorImageListView from './DoctorImageListView';
import DoctorThumbListView from './DoctorThumbListView';

const DoctorListPageListing = ({
  doctors,
  displayMode,
  currentPage,
  totalPage,
  onChangePage,
}) => {
  const location = useLocation();
  const path = location.pathname;
  const paths = path.split('/');
  const pathFixed = paths[2];

  console.log(doctors);
  return (
    <Row>
      {doctors.map((doctor) => {
        if (displayMode === 'imagelist') {
          return (
            <DoctorImageListView
              key={doctor.doctorId}
              doctor={doctor}
              defaultHeadshot={doctorHeadshot}
              adminRoot={adminRoot}
              pathFixed={pathFixed}
            />
          );
        }
        if (displayMode === 'thumblist') {
          return (
            <DoctorThumbListView
              key={doctor.doctorId}
              doctor={doctor}
              defaultHeadshot={doctorHeadshot}
              adminRoot={adminRoot}
              pathFixed={pathFixed}
            />
          );
        }
        return (
          <DoctorDataListView
            key={doctor.doctorId}
            doctor={doctor}
            defaultHeadshot={doctorHeadshot}
            adminRoot={adminRoot}
            pathFixed={pathFixed}
          />
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChangePage={(i) => onChangePage(i)}
      />
    </Row>
  );
};

export default React.memo(DoctorListPageListing);
