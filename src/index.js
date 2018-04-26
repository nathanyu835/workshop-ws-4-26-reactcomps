
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './style.scss';

const {
  Header, Content, Footer, Sider,
} = Layout;

ReactDOM.render(
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} />
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  , document.getElementById('container'),
);

//
// const App = () => {
//   return <div className="test">All the React are belong to us!</div>;
// // };
//
// ReactDOM.render(<App />, document.getElementById('main'));
