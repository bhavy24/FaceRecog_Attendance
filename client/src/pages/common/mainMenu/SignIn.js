import { LoadingOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  Layout,
  Space
} from 'antd';
import React, { useContext, useState } from 'react';
import HeaderNavbar from '../../../components/common/mainMenu/HeaderNavbar';
import Footer from '../../../components/common/sharedLayout/Footer';
import { AuthContext } from '../../../context';
import { CheckError } from "../../../utils/ErrorHandling";
import { LOGIN_USER } from '../../../graphql/mutation';
import { useForm } from '../../../utils/hooks';

const { Content } = Layout;


export default (props) => {
  const context = useContext(AuthContext);
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push('/dashboard');
    },
    onError(err) {
      CheckError(err);
    },
    variables: values,
  });


  function loginUserCallback() {
    loginUser();
  }

  
  return (
    <Layout className='signin layout'>
      <HeaderNavbar />

      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Card className='forms'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop : "60px"
          }}
        >
          <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onSubmit}
          >
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input
                name='email'
                placeholder='Enter your email'
                prefix={<MailOutlined />}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                name='password'
                placeholder='Enter your password'
                prefix={<LockOutlined />}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                style = {{backgroundColor:"black", borderRadius:"10px"}}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Divider />
        {/* <Space>
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText='Continue With Google'
            onSuccess={handleGoogleResponse}
            onFailure={(error) => {
              setPressedGoogleLogin(false);
              console.error(error);
            }}
            cookiePolicy={'single_host_origin'}
            onRequest={() => setPressedGoogleLogin(true)}
            disabled={pressedGoogleLogin}
          />
        </Space> */}
        {/* {loginGoogleUserStatus.loading && (
          <Space>
            <Divider />
              Redirecting, please wait...
            <LoadingOutlined />
          </Space>
        )} */}
      </Content>
      <Footer />
    </Layout>
  );
};
