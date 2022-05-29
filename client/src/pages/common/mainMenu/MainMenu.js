import { Button, Col, Layout, Row, Typography } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavbar } from '../../../components/common/mainMenu';
import "./attend_bg1.jpeg"

import "./styles.css"
const { Content } = Layout;
const { Title } = Typography;

export default () => {
  return (
    <Layout className='home layout'>
      <HeaderNavbar  className = "changeHeader" />
      <Content className = "changeContent">
        <Row align="middle">
          <Col style={{ top: '60px' }} span={24} align="center">
            <Title level={3}>
              <Texty style = {{fontSize : "60px" , color:"black"}}
                type="left"
                mode="random"
              > A Web App to Track Attendance
              </Texty>
            </Title>
            <h1 style = {{fontSize : "15px", paddingTop: "10px"}}>
             New here? Click below to get started
            </h1>
            <Button type='primary' size = "large" htmlType='submit' style = {{backgroundColor:"black", marginTop:"10px"}}>
              <Link to='/signup'>Get Started</Link>
            </Button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};