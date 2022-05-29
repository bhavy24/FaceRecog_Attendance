import {
  HomeOutlined,
} from '@ant-design/icons';
import { Drawer } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ isCollapseMenuOpen, setIsCollapseMenuOpen }) => {

  return (
    <Drawer
      title='Menu'
      className='drawerMenu'
      visible={isCollapseMenuOpen}
      placement='top'
      onClose={() => {
        setIsCollapseMenuOpen(false);
      }}
    >
      <p>
        <Link to={'/dashboard'}>
          <HomeOutlined />
          &nbsp; Courses
        </Link>
      </p>
    </Drawer>
  );
};
