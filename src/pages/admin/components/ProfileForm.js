import React, { useState } from "react";
import { Form, Input, message } from "antd";

import { Btn, Container } from "../../../components/shared/styles/layout";
import { addProfile } from "../../../services/animal";
import { FormArea } from "../../../components/shared/styles/layout";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    color: "",
    size: "",
    story: "",
    phone: "",
    location: "",
  });

  const { name, age, color, size, story, phone, location } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = async () => {
    try {
      await addProfile({ name, age, color, size, story, phone, location });

      message.success("Profile saved!");
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  return (
    <Container>
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
            label="Age"
            name="age"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={onChange}
              value={age}
              type="number"
              name="age"
              placeholder="Age"
            />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={onChange}
              value={color}
              type="text"
              name="color"
              placeholder="Color"
            />
          </Form.Item>
          <Form.Item
            label="Size"
            name="size"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={onChange}
              value={size}
              type="text"
              name="size"
              placeholder="Size"
            />
          </Form.Item>
          <Form.Item
            label="Story"
            name="story"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea
              onChange={onChange}
              value={story}
              name="story"
              placeholder="Story"
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={onChange}
              value={phone}
              type="text"
              name="phone"
              placeholder="Phone"
            />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={onChange}
              value={location}
              type="text"
              name="location"
              placeholder="Location"
            />
          </Form.Item>
          <Btn htmlType="submit">Create profile</Btn>
        </Form>
    </Container>
  );
};

export default ProfileForm;
