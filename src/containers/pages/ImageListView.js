import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  Badge,
} from 'reactstrap';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from 'components/common/CustomBootstrap';

const ImageListView = ({ product, isSelect, collect }) => {
  return (
    <Colxx sm="6" lg="4" xl="3" className="mb-3" key={product.id}>
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        <Card
          className={classnames({
            active: isSelect,
          })}
        >
          <div className="position-relative">
            <CardImg top alt={product.title} src={product.img} />
            <Badge
              color={product.statusColor}
              pill
              className="position-absolute badge-top-left"
            >
              {product.status}
            </Badge>
          </div>
          <CardBody>
            <Row>
              <Colxx xxs="10" className="mb-3">
                <CardSubtitle>{product.title}</CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  {product.date}
                </CardText>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);
