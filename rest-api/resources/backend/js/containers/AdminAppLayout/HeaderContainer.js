import React from 'react';
import IconItem from '../../components/Items/IconItem';
import ProfileItem from '../../components/Items/ProfileItem';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header className="header header-fixed" >
        <IconItem />

        <Menu
          className='menu-header' mode="horizontal" >
          <Menu.Item className='menu-header-item' key="1">nav 1</Menu.Item>
          <Menu.Item className='menu-header-item' key="2">nav 2</Menu.Item>
          <Menu.Item className='menu-header-item' key="3">nav 3</Menu.Item>
        </Menu>

        <div id='right-headers-group'>
          <ProfileItem name={'Hau Nguyen'} avatarUrl={'./backend/resources/avatars/avatar.png'} />
        </div>
      </Header>
    );
  }
}

export default HeaderContainer;