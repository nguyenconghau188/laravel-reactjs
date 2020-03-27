import React, {Component} from 'react';
import {Layout, Menu} from 'antd';

import ProfileItem from '../Items/ProfileItem';

const {Header} = Layout;

class Headers extends Component {
  render() {
    return (
      <Header className="header-bar">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{
            background: '#2b489a',
            marginLeft: '200px'
          }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <div id='right-headers-group'>
            <ProfileItem name={'Hau Nguyen'} avatarUrl={'./backend/resources/avatars/avatar.png'} />
          </div>
        </Menu>
      </Header>
    );
  }
}

export default Headers;