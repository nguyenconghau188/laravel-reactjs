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

const { SubMenu } = Menu;
const { Sider } = Layout;

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      collapsed: false,
    }
    autoBind(this);
  }

  onCollapse = () => {
    this.setState(prevstate =>( {
      collapsed: !prevstate.collapsed
    }));
  }

  render() {
    return (
      <Sider theme="light" 
        collapsible collapsed={this.state.collapsed} 
        onCollapse={this.onCollapse} 
        className='site-layout-background'
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