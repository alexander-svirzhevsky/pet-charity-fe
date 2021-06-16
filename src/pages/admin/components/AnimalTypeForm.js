import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { FileAddOutlined } from "@ant-design/icons";

import {
  FormArea,
  DefaultButton,
} from "../../../components/shared/styles/layout";
import { addType } from "../../../services/animal";

const AnimalTypeForm = () => {
  const [form] = Form.useForm();

  const [type, setType] = useState("");

  const onFinish = async () => {
    try {
      await addType(type);

      message.success("Animal type saved!");
      form.resetFields();
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  const onChange = (e) => setType(e.target.value);

  return (
    <FormArea>
      <Form
        form={form}
        name="type"
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
        <DefaultButton
          htmlType="submit"
          size="large"
          icon={<FileAddOutlined />}
        >
          Add animal type
        </DefaultButton>
      </Form>
    </FormArea>
  );
};

export default AnimalTypeForm;
