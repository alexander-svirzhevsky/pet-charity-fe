import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Form, Input, Button } from "antd";

import { login } from "../../redux/thunks/auth";
import { Container, Title } from "../shared/layout";
import { RegisterWrapper, Btn } from "../shared/auth";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = async (values) => {
    dispatch(login({ email, password }));
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <RegisterWrapper>
      <Container>
        <Title>Log in</Title>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={console.log("error")}
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
    </RegisterWrapper>
  );
};

export default Login;
