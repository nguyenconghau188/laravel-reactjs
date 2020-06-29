import React from 'react';
import { IconItem, ProfileItem } from "../../_components";
import { Layout, Menu } from "antd";
import myAvatar from '../../_resources/avatars/avatar.png';

const { Header } = Layout;

export class HeaderContainer extends React.Component {
    render() {
        return (
            <Header className="header header-fixed">
                <IconItem />
                <Menu
                    className="menu-header" mode="horizontal"
                >
                    <Menu.Item className="menu-header-item">nav 1</Menu.Item>
                    <Menu.Item className="menu-header-item">nav 2</Menu.Item>
                    <Menu.Item className="menu-header-item">nav 3</Menu.Item>
                </Menu>

                <div id='right-headers-group'>
                    <ProfileItem 
                        name={'Hau Nguyen'} 
                        avatarUrl={myAvatar} 
                    />
                </div>
            </Header>
        );
    }
}

