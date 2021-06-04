import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "antd";
import { LoginOutlined } from "@ant-design/icons";

import LoginImg from "../../assets/images/login.jpg";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import { login } from "../../redux/thunks/auth";
import {
  Container,
  Title,
  SubLink,
  BackgroundFill,
  DefaultButton,
} from "../shared/styles/layout";
import { colors } from "../shared/styles/global";
import {
  AuthContent,
  LoginContent,
  AuthGoogle,
} from "../shared/styles/auth/auth";

const Login = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <BackgroundFill image={LoginImg}>
      <Container>
        <AuthContent>
          <LoginContent>
            <Title color={colors.black} weight={"600"}>
              Log in
            </Title>
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
              <DefaultButton
                htmlType="submit"
                size="large"
                icon={<LoginOutlined />}
              >
                Log in
              </DefaultButton>
              <SubLink color={colors.black} to="/forgot-password">
                Forgot the password?
              </SubLink>
            </Form>
          </LoginContent>
          <AuthGoogle>
            <span>
              If you don't have an account you also can sign in using your
              Google account
            </span>
            <GoogleAuth />
          </AuthGoogle>
        </AuthContent>
      </Container>
    </BackgroundFill>
  );
};

export default Login;
