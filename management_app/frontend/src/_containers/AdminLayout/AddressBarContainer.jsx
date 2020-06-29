import React from 'react';

import { Breadcrumb } from 'antd';

export class AddressBarContainer extends React.Component {
  render() {
    return (
      <Breadcrumb style={{ padding: '10px 10px 0px 20px' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    );  
  }
}