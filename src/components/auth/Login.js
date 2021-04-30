import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "antd";

import { login } from "../../redux/thunks/auth";
import { Container, Title } from "../shared/styles/layout";
import { BackgroundFill, Btn } from "../shared/styles/layout";
import RegisterImg from "../../assets/images/cat3.jpg";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = () => {
    dispatch(login({ email, password }));
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <BackgroundFill image={RegisterImg}>
      <Container>
        <Title>Log in</Title>
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
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              onChange={onChange}
              value={email}
              type="email"
              name="email"
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password
              onChange={onChange}
              value={password}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Item>
          <Btn htmlType="submit">Log in</Btn>
        </Form>
      </Container>
    </BackgroundFill>
  );
};

export default Login;
