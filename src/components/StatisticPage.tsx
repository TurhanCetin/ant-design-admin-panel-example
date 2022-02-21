import '../App.css'
import { Breadcrumb, Button, Card, Col, Layout, Row, Statistic } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import Countdown from 'antd/lib/statistic/Countdown';
import { Line } from '@ant-design/charts';


function StatisticPage(){

  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  function onFinish() {
    console.log('finished!');
  }
  
  function onChange(val: number) {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  }

  return(
    <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin:'0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Statistic</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col span={12}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={12}>
                  <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                  <Button style={{ marginTop: 16 }} type="primary">
                    Recharge
                  </Button>
                </Col>
            </Row>
              </Col>
              <Col span={12}>
              <Row gutter={16}>
                <Col span={12}>
                  <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                </Col>
                <Col span={12}>
                  <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                </Col>
                <Col span={24} style={{ marginTop: 32 }}>
                  <Countdown title="Day Level" value={deadline} format="HH:mm:ss:SSS" />
                </Col>
                <Col span={12}>
                  <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={() => onChange} />
                </Col>
              </Row>
              </Col>
            </Row>
            <Card title="Line Chart" bordered={false} style={{ marginTop: 32 }}>
              <Line {...config}/>
            </Card>
        </Content>
    </Layout>
  )
}

export default StatisticPage