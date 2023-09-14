import React from 'react';
import { Card, Badge, Button } from 'reactstrap';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from 'components/common/CustomBootstrap';

const CasoDataListView = ({ product, isSelect, collect }) => {
  return (
    <Colxx xxs="12" className="mb-3">
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        <Card
          className={classnames('d-flex flex-row', {
            active: isSelect,
          })}
        >
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <p className="list-item-heading mb-1 truncate w-20">
                {product.title}
              </p>
              <p className="mb-1 text-muted text-small w-10 w-sm-100">
                {product.category}
              </p>
              <p className="mb-1 text-muted text-small w-10 w-sm-100">
                {product.date}
              </p>
              <Button color="primary" href="#" className="mb-2">
                <p className="mb-1 w-5 w-sm-100">
                  <i className="iconsminds-download-1" />
                </p>
              </Button>
              <Button color="primary" href="#" className="mb-2">
                <p className="mb-1 w-5 w-sm-100">
                  <i className="iconsminds-upload" />
                </p>
              </Button>
              <div className="w-10 w-sm-100">
                <Badge color={product.statusColor} pill>
                  {product.status}
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(CasoDataListView);
