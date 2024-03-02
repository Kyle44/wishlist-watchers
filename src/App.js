import { Layout, Typography, Button } from 'antd';
import { HeartFilled, StarFilled } from '@ant-design/icons';
import './App.css';
import Sidebar from './layout/Sidebar';

function App() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  return (
    <div>
    <Layout>
      <Sidebar />
      {/* <Header style={{ background: '#fff', textAlign: 'center' }}>
        <Title level={2}>Welcome to Cool WebPage</Title>
      </Header>
      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <Title level={3}>Explore the Knick Knacks</Title>
        <Button type="primary" icon={<HeartFilled />}>Like</Button>
        <Button type="default" icon={<StarFilled />}>Favorite</Button>
      </Content> */}
      <Footer style={{ textAlign: 'center' }}>
        Made with Ant Design - ©2023 Cool WebPage
      </Footer>
    </Layout>
    </div>
  );
}

export default App;
