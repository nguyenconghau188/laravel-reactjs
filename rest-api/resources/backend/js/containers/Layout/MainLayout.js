import React, { Component } from 'react';
import { Layout } from 'antd';
import './layout.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MenuActions from '../../actions/MenuActions';


import SideBar from "../../components/Layout/SideBar";
import Contents from '../../components/Layout/Contents';
import Headers from '../../components/Layout/Headers';

class MainLayout extends Component {
  render() {
    const {menus, menuActions} = this.props;
    return (
      <Layout>
        <Headers />
        <Layout style={{ marginTop: '64px' }}>
          <SideBar menus={menus} menuActions={menuActions} />
          <Contents menus={menus} />
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    menus: state.menuReducers,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    menuActions: bindActionCreators(MenuActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);