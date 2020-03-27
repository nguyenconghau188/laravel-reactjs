import React, {Component} from 'react';
import {Menu, Dropdown, Avatar} from 'antd';
import { DownOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

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

const showAvatar = (avatarUrl) => {
  return (
    <Avatar src={avatarUrl} />
  );
}

const ProfileItem = (props) => {
  return (
    <Dropdown overlay={menu}>
      <span className='headers-profileItem'>
        <a src='#' style={{padding: '10px'}}>{props.name}</a>
        {showAvatar(props.avatarUrl)}
      </span>
    </Dropdown>
  );
}

export default ProfileItem;