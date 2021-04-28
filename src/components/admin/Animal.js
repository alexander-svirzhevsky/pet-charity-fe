import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, message } from "antd";
import styled from "styled-components";

import { Btn } from "../shared/auth";
import { addAnimal } from "../../redux/thunks/admin";

const Section = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Type = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    breedName: "",
    type: "",
  });
  const { name, sex, breedName, type } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = () => {
    dispatch(addAnimal({ name, sex, breedName, type })).then((err) => {
      if (err) {
        message.error(err);
      } else {
        message.success("Animal saved!");
      }
    });
  };

  return (
    <Section>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
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
            placeholder="Animal Name"
          />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="sex"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={onChange}
            value={sex}
            type="text"
            name="sex"
            placeholder="Gender"
          />
        </Form.Item>
        <Form.Item
          label="Breed Name"
          name="breedName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={onChange}
            value={breedName}
            type="text"
            name="breedName"
            placeholder="Breed Name"
          />
        </Form.Item>
        <Form.Item
          label="Animal Type"
          name="type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={onChange}
            value={type}
            type="text"
            name="type"
            placeholder="Animal Type"
          />
        </Form.Item>
        <Btn htmlType="submit">Add animal</Btn>
      </Form>
    </Section>
  );
};

export default Type;
