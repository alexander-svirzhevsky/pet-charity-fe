import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, message } from "antd";

import { Btn } from "../shared/auth";
import { addBreed } from "../../redux/thunks/admin";

const Breed = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    breedName: "",
    type: "",
  });
  const { breedName, type } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = () => {
    dispatch(addBreed({ breedName, type })).then((err) => {
      if (err) {
        message.error(err);
      } else {
        message.success("Breed saved!");
      }
    });
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
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
      <Btn htmlType="submit">Add animal breed</Btn>
    </Form>
  );
};

export default Breed;
