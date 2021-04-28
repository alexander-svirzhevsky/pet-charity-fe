import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, message } from "antd";

import { Btn } from "../shared/auth";
import { addType } from "../../redux/thunks/admin";

const Type = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    type: "",
  });
  const { type } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = () => {
    dispatch(addType({ type })).then((err) => {
      if (err) {
        message.error(err);
      } else {
        message.success("Animal type saved!");
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
      <Btn htmlType="submit">Add animal type</Btn>
    </Form>
  );
};

export default Type;
