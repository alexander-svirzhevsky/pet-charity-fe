import React, { useState } from "react";
import { Form, Input, message } from "antd";

import { Btn } from "../../../components/shared/styles/layout";
import { addAnimal } from "../../../services/animal";
import { Section, FormArea } from "../../../components/shared/styles/layout";

const AnimalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    breedName: "",
    type: "",
  });

  const { name, sex, breedName, type } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = async () => {
    try {
      await addAnimal({ name, sex, breedName, type });

      message.success("Animal saved!");
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
      </FormArea>
    </Section>
  );
};

export default AnimalForm;
