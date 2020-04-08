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
        <Layout style={{ marginTop: '64px'}}>
          <SideBar />
          <Contents />
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;