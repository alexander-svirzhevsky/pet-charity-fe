import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Form, Input, Button } from "antd";

import { register } from "../../redux/actions/auth";
import RegisterImg from "../../assets/images/register.png";

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

const Container = styled.div`
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
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

  const onChange = (e) => {
    return setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("Passwaord do not match");
    } else {
      dispatch(register({ name, email, password }), []);
    }
  };

  return (
    <>
      <RegisterWrapper>
        <Container>
          <form
            onSubmit={(e) => onSubmit(e)}
            initialValues={{
              remember: true,
            }}
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
                onChange={(e) => onChange(e)}
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
                onChange={(e) => onChange(e)}
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
                onChange={(e) => onChange(e)}
                value={password}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              label="password2"
              name="password2"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password
                onChange={(e) => onChange(e)}
                value={password2}
                type="password2"
                name="password2"
                placeholder="Confirm password"
              />
            </Form.Item>
            <Button htmlType="submit" type="primary">
              Register
            </Button>
          </form>
        </Container>
      </RegisterWrapper>
    </>
  );
};

export default Register;
