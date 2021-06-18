import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Input, message } from "antd";
import { LoginOutlined } from "@ant-design/icons";

import LoginImg from "../../assets/images/login.jpg";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import { register } from "../../redux/thunks/auth";
import {
  Container,
  Title,
  BackgroundFill,
  DefaultButton,
  Text,
} from "../shared/styles/layout";
import {
  AuthContent,
  LoginContent,
  AuthGoogle,
} from "../shared/styles/auth/auth";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = () => {
    if (password !== password2) {
      message.error("Password do not match");
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <BackgroundFill image={LoginImg}>
      <Container>
        <AuthContent>
          <LoginContent>
            <Title weight={"600"}>Register</Title>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Username"
                name="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  onChange={onChange}
                  value={name}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </Form.Item>
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
              <Form.Item
                label="Password2"
                name="password2"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password
                  onChange={onChange}
                  value={password2}
                  type="password2"
                  name="password2"
                  placeholder="Confirm password"
                />
              </Form.Item>
              <DefaultButton
                htmlType="submit"
                size="large"
                icon={<LoginOutlined />}
              >
                Register
              </DefaultButton>
            </Form>
          </LoginContent>
          <AuthGoogle>
            <Text>
              If you don't have an account you also can sign in using your
              Google account
            </Text>
            <GoogleAuth />
          </AuthGoogle>
        </AuthContent>
      </Container>
    </BackgroundFill>
  );
};

export default Register;
