/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Row,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
} from 'reactstrap';
import { injectIntl } from 'react-intl';

import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';

import { DataListIcon, ThumbListIcon, ImageListIcon } from 'components/svg';

const EncabezadoListaDashboard = ({
  intl,
  displayMode,
  changeDisplayMode,
  changeOrderBy,
  changePageSize,
  selectedPageSize,
  totalItemCount,
  selectedOrderOption,
  startIndex,
  endIndex,
  onSearchKey,
  orderOptions,
  pageSizes,
  viewText,
}) => {
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);
  const { messages } = intl;

  return (
    <Row>
      <Colxx xxs="12">
        <div className="mb-2">
          <Button
            color="empty"
            className="pt-0 pl-0 d-inline-block d-md-none"
            onClick={() => setDisplayOptionsIsOpen(!displayOptionsIsOpen)}
          >
            <IntlMessages id="pages.display-options" />{' '}
            <i className="simple-icon-arrow-down align-middle" />
          </Button>
          <Collapse
            isOpen={displayOptionsIsOpen}
            className="d-md-block"
            id="displayOptions"
          >
            <span className="mr-3 d-inline-block float-md-left">
              <a
                href="#/"
                className={`mr-2 view-icon ${
                  displayMode === 'list' ? 'active' : ''
                }`}
                onClick={() => changeDisplayMode('list')}
              >
                <DataListIcon />
              </a>
              <a
                href="#/"
                className={`mr-2 view-icon ${
                  displayMode === 'thumblist' ? 'active' : ''
                }`}
                onClick={() => changeDisplayMode('thumblist')}
              >
                <ThumbListIcon />
              </a>
              <a
                href="#/"
                className={`mr-2 view-icon ${
                  displayMode === 'imagelist' ? 'active' : ''
                }`}
                onClick={() => changeDisplayMode('imagelist')}
              >
                <ImageListIcon />
              </a>
            </span>

            <div className="d-block d-md-inline-block pt-1">
              <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                <DropdownToggle caret color="outline-dark" size="xs">
                  {selectedOrderOption.label}
                </DropdownToggle>
                <DropdownMenu>
                  {orderOptions.map((order, index) => {
                    return (
                      <DropdownItem
                        key={index}
                        onClick={() => changeOrderBy(order.column)}
                      >
                        {order.label}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                <input
                  type="text"
                  name="keyword"
                  id="search"
                  placeholder={messages['menu.search']}
                  onKeyPress={(e) => onSearchKey(e)}
                />
              </div>
            </div>
            <div className="float-md-right pt-1">
              <span className="text-muted text-small mr-1">
                Mostrando&nbsp;
                {startIndex + 1}-
                {totalItemCount >= endIndex ? endIndex : totalItemCount}
                {` de `}
                {totalItemCount} {viewText}
              </span>
              <UncontrolledDropdown className="d-inline-block">
                <DropdownToggle caret color="outline-dark" size="xs">
                  {selectedPageSize}
                </DropdownToggle>
                <DropdownMenu right>
                  {pageSizes.map((size, index) => {
                    return (
                      <DropdownItem
                        key={index}
                        onClick={() => changePageSize(size)}
                      >
                        {size}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Collapse>
        </div>
      </Colxx>
    </Row>
  );
};

export default injectIntl(EncabezadoListaDashboard);
