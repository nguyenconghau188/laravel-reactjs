import React, {Component} from 'react';
import { Layout } from 'antd';
import './layout.css';

import SideBar from "./SideBar";
import Contents from './Contents';
import Headers from './Headers';

class MainLayout extends Component {
  render() {
    return (
      <Layout>
        <Headers />
        <Layout style={{ minHeight: '100vh' }} >
          <SideBar />
          <Contents />
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;