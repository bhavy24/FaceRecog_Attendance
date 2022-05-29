import { Layout } from 'antd';
import React from 'react';
const { Footer } = Layout;

export default () => (
  <Footer style={{ textAlign: 'center', backgroundColor:"#eff1f3", height: "80px" }}>
    <span>&copy; YES MA'AM {new Date().getFullYear()}</span>
  </Footer>
);

