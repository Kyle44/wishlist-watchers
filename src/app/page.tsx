"use client"

import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Breadcrumb, Layout, Menu, Switch, theme } from 'antd';

import Link from 'next/link';


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuTheme, setMenuTheme] = useState<MenuTheme>('dark');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const changeTheme = (value: boolean) => {
    setMenuTheme(value ? 'dark' : 'light');
  };

  const onMenuSelect = (selectedKeys) => {
    console.log("hello")
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      
      <Sider theme={menuTheme} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      
        <div className="demo-logo-vertical" />
        
        <Menu items={items} theme={menuTheme} defaultSelectedKeys={['1']} mode="inline"  onSelect={(selectedKeys) => onMenuSelect}/>
        <Switch onChange={changeTheme} /> <div>{menuTheme} mode</div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[ {title: "Sample"}, {title: "Sample 2"}]}/>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat. Whaaa
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Wishlist Watchers ©2023 Created by K²</Footer>
      </Layout>
    </Layout>
  );
};

export default App;