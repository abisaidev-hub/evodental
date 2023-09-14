import React, { useState, useEffect } from 'react';

import axios from 'axios';

import EncabezadoLista from 'containers/pages/EncabezadoLista';
import DoctorListPageListing from 'containers/pages/DoctorListPageListing';

const apiEvo = `${process.env.API}/Doctors`;

const orderOptions = [
  { column: 'latest', label: 'Más recientes' },
  { column: 'lastname', label: 'Apellidos' },
  { column: 'oldest', label: 'Más antiguos' },
];
const pageSizes = [4, 8, 12, 20];

const Doctores = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayMode, setDisplayMode] = useState('thumblist');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(8);
  const [selectedOrderOption, setSelectedOrderOption] = useState({
    column: 'latest',
    label: 'Más recientes',
  });

  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState('');

  const [doctors, setDoctors] = useState([]);

  const handleTotalPage = (total) => {
    setTotalPage(Math.floor(total / selectedPageSize));
    setTotalItemCount(total);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  useEffect(() => {
    axios
      .get(
        `${apiEvo}?page=${currentPage}&pagelength=${selectedPageSize}&showInactive=false`
      )
      .then((res) => {
        setDoctors(res.data.item1.reverse());
        handleTotalPage(res.data.item2);
        setIsLoaded(true);
      });
  }, [currentPage, selectedPageSize]);

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <div className="disable-text-selection">
        <EncabezadoLista
          addButtonText="Crear nuevo doctor"
          viewText="doctores"
          addPath="crear-doctor"
          heading="menu.doctores"
          displayMode={displayMode}
          changeDisplayMode={setDisplayMode}
          changeOrderBy={(column) => {
            setSelectedOrderOption(
              orderOptions.find((x) => x.column === column)
            );
          }}
          changePageSize={setSelectedPageSize}
          selectedPageSize={selectedPageSize}
          totalItemCount={totalItemCount}
          selectedOrderOption={selectedOrderOption}
          match={match}
          startIndex={startIndex}
          endIndex={endIndex}
          onSearchKey={(e) => {
            if (e.key === 'Enter') {
              setSearch(e.target.value.toLowerCase());
            }
          }}
          orderOptions={orderOptions}
          pageSizes={pageSizes}
        />
        <DoctorListPageListing
          doctors={doctors}
          displayMode={displayMode}
          currentPage={currentPage}
          totalPage={totalPage}
          onChangePage={setCurrentPage}
          search={search}
        />
      </div>
    </>
  );
};

export default Doctores;
