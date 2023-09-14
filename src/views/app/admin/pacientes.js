import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { servicePath } from 'constants/defaultValues';

import EncabezadoLista from 'containers/pages/EncabezadoLista';
import PacienteListPageListing from 'containers/pages/PacienteListPageListing';

const apiUrl = `${servicePath}/cakes/paging`;

const orderOptions = [
  { column: 'latest', label: 'Más recientes' },
  { column: 'lastname', label: 'Apellidos' },
  { column: 'oldest', label: 'Más antiguos' },
];
const pageSizes = [4, 8, 12, 20];

const Pacientes = ({ match }) => {
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
  const [items, setItems] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  useEffect(() => {
    async function fetchData() {
      axios
        .get(
          `${apiUrl}?pageSize=${selectedPageSize}&currentPage=${currentPage}&orderBy=${selectedOrderOption.column}&search=${search}`
        )
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setTotalPage(data.totalPage);
          setItems(
            data.data.map((x) => {
              return { ...x, img: x.img.replace('img/', 'img/products/') };
            })
          );
          setTotalItemCount(data.totalItem);
          setIsLoaded(true);
        });
    }
    fetchData();
  }, [selectedPageSize, currentPage, selectedOrderOption, search]);

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <div className="disable-text-selection">
        <EncabezadoLista
          addButtonText="Crear nuevo paciente"
          viewText="pacientes"
          addPath="crear-paciente"
          heading="menu.pacientes"
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
        <PacienteListPageListing
          items={items}
          displayMode={displayMode}
          currentPage={currentPage}
          totalPage={totalPage}
          onChangePage={setCurrentPage}
          type="paciente"
        />
      </div>
    </>
  );
};

export default Pacientes;
