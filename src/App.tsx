import './App.css'
import { Layout, Menu, Breadcrumb, Typography ,Table} from 'antd';
import {
  HomeOutlined,
  LaptopOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    team: 'Mobile',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    team: 'Java',

  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Team',
    dataIndex: 'team',
    key:'team',
  },
];



function App() {

  const [collapsed, setCollapse] = useState(false);
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider
    collapsible 
    collapsed={collapsed} 
    onCollapse={()=> setCollapse(!collapsed) }>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="2" icon={<HomeOutlined />}>
         Users
        </Menu.Item>
        <Menu.Item key="1" icon={<LaptopOutlined />}>
          Teams
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        { 
          dataSource.map(data =>(

            <Menu.Item icon={<UserOutlined />} key="6">{data.name}</Menu.Item>
      
          ))
          }
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          { 
          dataSource.map(data =>(

            <Menu.Item icon={<TeamOutlined />} key="6">{data.team}</Menu.Item>
      
          ))
          }
        </SubMenu>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
        </Breadcrumb>
        <Table dataSource={dataSource} columns={columns} />;
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )
}

export default App
