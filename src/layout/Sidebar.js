import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  InfoOutlined
} from '@ant-design/icons';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home.js';
import MyWishlists from '../pages/MyWishlists.js';
import About from '../pages/About.js';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
    <Sider
      width={window.innerWidth > 768 ? 200 : window.innerWidth - 1}
      style={{ background: '#fff' }}
      collapsible={true}
      collapsed={collapsed}
      onCollapse={() => toggle()}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/Home">Home (Friend's Wishlists)</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/MyWishlists">My Wishlists</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<InfoOutlined />}>
            <Link to="/About">About</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Routes>
      <Route path="/Home" Component={Home} />
      <Route path="/MyWishlists" Component={MyWishlists} />
      <Route path="/About" Component={About} />
  </Routes>
</Router>
  );
}

export default Sidebar;