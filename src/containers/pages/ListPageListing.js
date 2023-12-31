import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Row } from 'reactstrap';
import { adminRoot } from 'constants/defaultValues';
import Pagination from './Pagination';
import DataListView from './DataListView';
import ImageListView from './ImageListView';
import ThumbListView from './ThumbListView';

function collect(props) {
  return { data: props.data };
}

const ListPageListing = ({
  items,
  displayMode,
  currentPage,
  totalPage,
  onChangePage,
  type,
}) => {
  const location = useLocation();
  const path = location.pathname;
  const paths = path.split('/');
  const pathFixed = paths[2];
  return (
    <Row>
      {items.map((product) => {
        if (displayMode === 'imagelist') {
          return (
            <NavLink
              to={`${adminRoot}/${
                pathFixed === 'medico' ? 'medico' : 'admin'
              }/${type}`}
              className="d-block position-relative"
              style={{ width: '100%' }}
            >
              <ImageListView
                key={product.id}
                product={product}
                collect={collect}
              />
            </NavLink>
          );
        }
        if (displayMode === 'thumblist') {
          return (
            <NavLink
              to={`${adminRoot}/${
                pathFixed === 'medico' ? 'medico' : 'admin'
              }/${type}`}
              className="d-block position-relative"
              style={{ width: '100%' }}
            >
              <ThumbListView
                key={product.id}
                product={product}
                collect={collect}
              />
            </NavLink>
          );
        }
        return (
          <NavLink
            to={`${adminRoot}/${
              pathFixed === 'medico' ? 'medico' : 'admin'
            }/${type}`}
            className="d-block position-relative"
            style={{ width: '100%' }}
            key={product.id}
          >
            <DataListView
              key={product.id}
              product={product}
              collect={collect}
            />
          </NavLink>
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

export default React.memo(ListPageListing);
