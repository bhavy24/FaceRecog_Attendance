import { Layout, Form, Card, Button, Input, message } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { ENROL_COURSE_MUTATION } from '../../../graphql/mutation';
import React, { useState } from 'react';
import "./styles.css"

import { CheckError } from "../../../utils/ErrorHandling";

export default () => {
  const [courseID, setCourseID] = useState('');
  const [enrolCourseCallback, enrolCourseStatus] = useMutation(
    ENROL_COURSE_MUTATION,
    {
      onCompleted(data) {
        message.success(
          'Enrol success'
        );
      },
      onError(err) {
        CheckError(err);
      },
      variables: { id: courseID },
    }
  );
  return (
    <div>
      <Form onFinish={() => enrolCourseCallback()}>
        <Form.Item className='label'
          label ='Course ID'
          name='courseID'
          rules={[{ required: true, message: 'Please input course ID!' }]}
        >
          <Input className = "syntax"
            name='courseCode'
            placeholder='Enter course ID to enrol'
            onChange={(e) => setCourseID(e.target.value)}
          />
        </Form.Item>

        <Form.Item style = {{float:"right" ,position: "relative", right:"430px" , bottom: "67px"}}>
        <Button
            type='primary'
            size = "large"
            loading={enrolCourseStatus.loading}
            style={{ backgroundColor:"black", borderRadius:"20px", width: "100px" }}
            htmlType='submit'
          >
            Submit
          </Button>
        </Form.Item>
      </Form> 
    </div>
  );
};
