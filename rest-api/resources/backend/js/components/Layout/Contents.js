import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

class Contents extends Component {

  render() {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item key='1'>Home</Breadcrumb.Item>
          <Breadcrumb.Item key='2'>List</Breadcrumb.Item>
          <Breadcrumb.Item key='3'>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    );
  }
}

export default Contents;