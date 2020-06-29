import React from "react";
import './AdminApp.css';
import { Switch, Router, Route, Link } from "react-router-dom";
import { HeaderContainer, SiderContainer, AddressBarContainer } from "../AdminLayout";
import DashboardContainer from '../../_containers/DashboardContainer';
import { Layout } from 'antd';

const { Content } = Layout;

export class AdminApp extends React.Component {

    render() {
        return (
            <Layout>
                <HeaderContainer />
                <Layout className='layout-main'>
                        <SiderContainer />
                        <Layout style={{ padding: '0 10px 24px', marginLeft: '200px' }}>
                            <div id='address-bar'>
                                <AddressBarContainer />
                            </div>
                            <Content style={{ overflow: 'initial' }}>
                                <div className="site-layout-background" 
                                    style={{ 
                                        padding: 24, 
                                        textAlign: 'center', 
                                        minHeight: '500px' 
                                    }}
                                >

                                    ..
                                    <br/>
                                    conbtetn
                            </div>
                            </Content>
                        </Layout>
                </Layout>
            </Layout>
        );
    };
}