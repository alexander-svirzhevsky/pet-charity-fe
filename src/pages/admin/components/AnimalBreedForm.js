import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { FileAddOutlined } from "@ant-design/icons";

import {
  FormArea,
  DefaultButton,
} from "../../../components/shared/styles/layout";
import { addBreed } from "../../../services/animal";

const AnimalBreedForm = () => {
  const [form] = Form.useForm();

  const [formData, setFormData] = useState({
    breedName: "",
    type: "",
  });
  const { breedName, type } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = async () => {
    try {
      await addBreed({ breedName, type });

      message.success("Breed saved!");
      form.resetFields();
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  return (
    <FormArea>
      <Form
        form={form}
        name="breed"
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
        <DefaultButton
          htmlType="submit"
          size="large"
          icon={<FileAddOutlined />}
        >
          Add animal breed
        </DefaultButton>
      </Form>
    </FormArea>
  );
};

export default AnimalBreedForm;
