import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Form, Input, Button } from "antd";

import { register } from "../../redux/thunks/auth";
import RegisterImg from "../../assets/images/register.png";
import { Container } from "../shared/layout";

const RegisterWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${RegisterImg}) center bottom / contain no-repeat;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: #f7fbff;
`;

const Btn = styled(Button)`
  padding: 20px 50px;
  background-color: #f2726f;
  border: none;
  cursor: pointer;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    color: #f2726f;
  }
`;

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
      console.log("Passwaord do not match");
    } else {
      dispatch(register({ name, email, password }), []);
    }
  };

  return (
    <RegisterWrapper>
      <Container>
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
