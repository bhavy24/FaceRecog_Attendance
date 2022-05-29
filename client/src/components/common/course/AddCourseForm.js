import { useMutation } from "@apollo/react-hooks";
import { Button, Card, Form, Input, Layout, message } from "antd";
import React, { useContext } from "react";
import { AuthContext, CourseContext } from "../../../context";
import { CheckError } from "../../../utils/ErrorHandling";
import { ADD_COURSE_MUTATION } from "../../../graphql/mutation";
import { useForm } from "../../../utils/hooks";

const { Content } = Layout;

export default ({ refetchTableTotal, refetchTable }) => {
  const { user } = useContext(AuthContext);
  const { addCourse } = useContext(CourseContext);
  const { onSubmit, onChange, values } = useForm(submitCallback);

  const [addCourseCallback, { loading }] = useMutation(ADD_COURSE_MUTATION, {
    update() {
      message.success("Course created successfully!");
      refetchTableTotal();
      refetchTable();
    },
    onError(err) {
      CheckError(err);
    },
    variables: {
      name: values.courseName,
      code: values.courseCode,
      session: values.courseSession,
    },
  });

  function submitCallback() {
    addCourseCallback();
  }

  return (
    <Content>
      <Card className="card">
        <h1><em>Create Course</em></h1>
        <Form name="basic" onFinish={onSubmit}>
          <Form.Item className = "label"
            label="Course Code"
            name="courseCode"
            rules={[{ required: true, message: "Please input course code!" }]}
          >
            <Input className = "syntax"
              name="courseCode"
              placeholder="Enter course code"
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item className = "label"
            label="Course Name"
            name="courseName"
            rules={[{ required: true, message: "Please input course name!" }]}
          >
            <Input className = "syntax"
              name="courseName"
              placeholder="Enter course name"
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item className = "label"
            label="Course Session"
            name="courseSession"
            rules={[
              { required: true, message: "Please input course session!" },
            ]}
          >
            <Input className = "syntax"
              name="courseSession"
              placeholder="Enter course session"
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item>
            <Button style={{ backgroundColor:"black", borderRadius:"20px", width: "150px" }}
                    type="primary"  
                    size = "large" 
                    htmlType="submit" 
                    loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};
