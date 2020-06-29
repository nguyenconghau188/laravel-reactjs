import React from 'react';
import { Link } from 'react-router-dom';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

export class SiderContainer extends React.Component {
    render() {
        return (
            <Sider width={200} className="site-layout-background"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }} >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['0']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                        padding: '2px',
                        border: '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <Menu.Item key="0">
                        <Link to='/admin/dashboard'>
                        DASHBOARD
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <UserOutlined />
                                subnav 1
                            </span>
                        }
                    >
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <LaptopOutlined />
                                subnav 2
                            </span>
                        }
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <NotificationOutlined />
                                subnav 3
                            </span>
                        }
                    >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}
