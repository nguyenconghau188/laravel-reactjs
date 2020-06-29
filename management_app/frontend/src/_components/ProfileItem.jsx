import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key='1'>
      <UserOutlined />
      Profile
    </Menu.Item>
    <Menu.Item key='2'>
      <SettingOutlined />
      Setting
    </Menu.Item>
    <Menu.Item key='3'>
      <LogoutOutlined />
      Sign out
    </Menu.Item>
  </Menu>
);

export const ProfileItem = (props) => {
  return (
    <Dropdown overlay={menu}>
      <span className='headers-profileItem' >
        <a src='#' style={{ padding: '10px', color: 'white' }}>{props.name}</a>
        <Avatar shape="circle" size={40} src={props.avatarUrl} />
      </span>
    </Dropdown>
  );
}
