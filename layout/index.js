import {Component} from 'react'
import {Layout, Menu, Icon} from 'antd'
import Link from 'umi/link'

const {Header, Sider, Content, Footer} = Layout
const {Item, SubMenu} = Menu

class BasicLayout extends Component {

  render() {
    return (
      <Layout>
        <Sider width={256} style={{minHeight: '100vh', color: '#FFF'}}>
          <div style={{
            height: '32px',
            background: 'rgba(255,255,255,.2)',
            margin: '16px',
            textAlign: 'center',
            lineHeight: '32px'
          }}>
            Little Bug
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Item key="1">
              <Link to="/helloworld">
                <Icon type="pie-chart" />
                <span>Helloworld</span>
              </Link>
            </Item>
            <SubMenu key="sub-menu-1"
                     title={<span><Icon type="dashboard" />Dashboard</span>}>
              <Item key="2"><Link to="/dashboard/analysis">分析页</Link></Item>
              <Item key="3"><Link to="/dashboard/monitor">监控页</Link></Item>
              <Item key="4"><Link to="/dashboard/workplace">工作台</Link></Item>
            </SubMenu>
            <Item key="5">
              <Link to="/list">
                <Icon type="pie-chart" />
                <span>card list</span>
              </Link>
            </Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>header</Header>
          <Content style={{margin: '24px 16px 0'}}>
            {this.props.children}
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }

}

export default BasicLayout;
