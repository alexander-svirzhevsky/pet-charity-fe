import React, { useState } from "react";
import { Form, Input, message } from "antd";

import {
  Btn,
  FormArea,
  Section,
} from "../../../components/shared/styles/layout";
import { addBreed } from "../../../services/animal";

const AnimalBreedForm = () => {
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
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  return (
    <Section flex="0 0 45%">
      <FormArea>
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
      </FormArea>
    </Section>
  );
};

export default AnimalBreedForm;