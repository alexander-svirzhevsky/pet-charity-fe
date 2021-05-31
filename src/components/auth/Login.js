import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Typography, Space } from "antd";

import { LoginOutlined } from "@ant-design/icons";

import GoogleAuth from "./GoogleAuth/GoogleAuth";
import { login } from "../../redux/thunks/auth";
import { Container, Title, SubLink } from "../shared/styles/layout";
import { BackgroundFill, Btn } from "../shared/styles/layout";

const Login = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // const { Text, Link } = Typography;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = () => {
    dispatch(login({ email, password }));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <BackgroundFill>
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
          <Button
            style={{ marginBottom: "10px", backgroundColor: "#4285f4" }}
            type="primary"
            htmlType="submit"
            size="large"
            icon={<LoginOutlined />}
          >
            Log in
          </Button>
          <SubLink to="/forgot-password">Forgot the password?</SubLink>
          <GoogleAuth />
        </Form>
      </Container>
    </BackgroundFill>
  );
};

export default Login;
