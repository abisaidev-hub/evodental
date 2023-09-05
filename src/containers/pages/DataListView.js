import React from 'react';
import { Card, CustomInput, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from 'components/common/CustomBootstrap';

const DataListView = ({ product, isSelect, collect, onCheckItem }) => {
  return (
    <Colxx xxs="12" className="mb-3">
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        <Card
          onClick={(event) => onCheckItem(event, product.id)}
          className={classnames('d-flex flex-row', {
            active: isSelect,
          })}
        >
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <NavLink to={`?p=${product.id}`} className="w-30 w-sm-100">
                <p className="list-item-heading mb-1 truncate">
                  {product.title}
                </p>
              </NavLink>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.category}
              </p>
              <p className="mb-1 text-muted text-small w-10 w-sm-100">
                {product.date}
              </p>
              <p className="mb-1 w-5 w-sm-100">
                <i className="iconsminds-download-1" />
              </p>
              <p className="mb-1 text-muted w-5 w-sm-100">
                <i className="iconsminds-upload" />
              </p>
              <div className="w-10 w-sm-100">
                <Badge color={product.statusColor} pill>
                  {product.status}
                </Badge>
              </div>
            </div>
            <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
              <CustomInput
                className="item-check mb-0"
                type="checkbox"
                id={`check_${product.id}`}
                checked={isSelect}
                onChange={() => {}}
                label=""
              />
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(DataListView);
