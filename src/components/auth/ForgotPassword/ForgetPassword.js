import React, { useState } from "react";
import { Form, Input, message, Button } from "antd";

import { Container } from "../../shared/styles/layout";
import { postEmail } from "../../../services/forgetPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onFinish = async () => {
    try {
      await postEmail({ email });

      message.success("We sent a letter on your email adress");
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  const onChange = (e) => setEmail(e.target.value);

  return (
    <Container>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={onChange}
            value={email}
            type="text"
            name="email"
            placeholder="Email"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Send an email
        </Button>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
