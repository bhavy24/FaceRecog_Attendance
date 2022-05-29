import {
  HomeOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  return (
    <Menu theme='dark' mode='vertical' defaultSelectedKeys={[path]}>
      <Menu.Item key={'dashboard'} icon={<HomeOutlined />}>
        <Link to={'/dashboard'}>Courses</Link>
      </Menu.Item>
      <Menu.Item key={'facegallery'} icon={<PictureOutlined />}>
        <Link to={'/facegallery'}>Face Gallery</Link>
      </Menu.Item>
    </Menu>
  );
};
 