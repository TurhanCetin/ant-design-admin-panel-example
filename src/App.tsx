import './App.css'
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  LaptopOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import  UserTable from './components/UserTable'
import StatisticPage from './components/StatisticPage';

const { Sider } = Layout;
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

function App() {

  const [collapsed, setCollapse] = useState(false);
  
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
      <Sider
      collapsible 
      collapsed={collapsed} 
      onCollapse={()=> setCollapse(!collapsed) }>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="item1" icon={<HomeOutlined />}>
           <Link to="/">Home</Link> 
          </Menu.Item>
          <Menu.Item key="item2" icon={<LaptopOutlined />}>
          <Link to="/users">Users</Link> 
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          { 
            dataSource.map(data =>(

              <Menu.Item icon={<UserOutlined />} key={data.key}>{data.name}</Menu.Item>
            
            ))
            }
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            { 
            dataSource.map(data =>(

              <Menu.Item icon={<TeamOutlined />} key={data.name}>{data.team}</Menu.Item>

              ))
            }
          </SubMenu>
        </Menu>
      </Sider>
          <Route exact path="/" component={StatisticPage}/>
          <Route exact path="/users" component={() => <UserTable dataSource={dataSource} />}/>
    </Layout>
  </Router>
  )
}

export default App
