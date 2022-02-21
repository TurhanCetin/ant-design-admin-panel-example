import '../App.css'
import { Layout,Breadcrumb,Table} from 'antd';

const { Header, Content } = Layout;

interface Props{
    dataSource:{
        key:string
        name:string
        age:number
        address:string
        team:string
    }[]
}

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
  

const UserTable : React.FC<Props> = ({dataSource}) =>{
    return(
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Users</Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={dataSource} columns={columns} />;
            </Content>
        </Layout>
    )
}

export default UserTable;
