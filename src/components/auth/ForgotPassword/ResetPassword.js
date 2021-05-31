import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Form, Input, message, Button } from "antd";

import { Container } from "../../shared/styles/layout";
import { postNewPass } from "../../../services/forgetPassword";

const ResetPassword = () => {
  const [data, setData] = useState({
    resetLink: "",
    newPass: "",
    confirmNewPass: "",
  });

  const { resetLink, newPass, confirmNewPass } = data;

  const history = useHistory();

  const onFinish = async () => {
    try {
      if (newPass !== confirmNewPass) {
        message.error("Password do not match");
      } else {
        await postNewPass({ resetLink, newPass });

        message.success("We change your password");
      }
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  useEffect(() => {
    const resetLink = history.location.pathname.substr(15);

    setData((prevData) => ({
      ...prevData,
      resetLink,
    }));
  }, []);

  return (
    <div>
      <Container>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="New Password"
            name="newPass"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password
              onChange={onChange}
              value={newPass}
              type="newPass"
              name="newPass"
              placeholder="New Password"
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmNewPass"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password
              onChange={onChange}
              value={confirmNewPass}
              type="confirmNewPass"
              name="confirmNewPass"
              placeholder="Confirm password"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Update password
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ResetPassword;
