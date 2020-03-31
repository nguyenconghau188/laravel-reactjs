import React from 'react';
import autoBind from 'react-autobind'
import 'antd/dist/antd.css';
import { Menu, Layout } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import {MENU_COLLAPSED, MENU_UNCOLLAPSED} from '../../constants/MenuTypes';

const { SubMenu } = Menu;
const { Sider } = Layout;

class SideBar extends React.Component {

  constructor(props) {
    super(props);

    autoBind(this);
  }

  onCollapse = (collapsedMenu) => {
    console.log('onCollapse')
    let collapsed = MENU_UNCOLLAPSED;
    if (collapsedMenu === false) {
      collapsed = MENU_COLLAPSED;
    }
    this.props.menuActions.collapsedSider(collapsed);
  }

  render() {
    const { menus, menuActions } = this.props;
    const collapsedMenu = menus.type === MENU_COLLAPSED ? false : true;
    console.log(collapsedMenu)

    return (
      <Sider theme="light" 
        collapsible collapsed={collapsedMenu} 
        onCollapse={this.onCollapse} 
        className='site-layout-background'
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <TeamOutlined />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <FileOutlined />
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;