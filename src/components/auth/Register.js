import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Form, Input } from "antd";

import { register } from "../../redux/thunks/auth";
import { Container, Title } from "../shared/layout";
import { RegisterWrapper, Btn } from "../shared/auth";

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

  const onFinish = async (values) => {
    if (password !== password2) {
      console.log("Passwaord do not match", "danger");
    } else {
      dispatch(register({ name, email, password }), []);
    }
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <RegisterWrapper>
      <Container>
        <Title>Register</Title>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={console.log("error")}
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
          <Btn htmlType="submit">Register</Btn>
        </Form>
      </Container>
    </RegisterWrapper>
  );
};

export default Register;
