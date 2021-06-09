import React, { useState } from "react";
import { Form, Input, message, Upload, Button } from "antd";
import { FileAddOutlined, UploadOutlined } from "@ant-design/icons";

import { addAnimal } from "../../../services/animal";
import {
  Container,
  FormContent,
  DefaultButton,
} from "../../../components/shared/styles/layout";

const AnimalForm = () => {
  const [formData, setFormData] = useState({
    file: "",
    name: "",
    sex: "",
    breedName: "",
    type: "",
  });

  const { name, sex, breedName, type, file } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFinish = async () => {
    let formdata = new FormData();

    formdata.append("image", file);
    formdata.append("name", name);
    formdata.append("sex", sex);
    formdata.append("breedName", breedName);
    formdata.append("type", type);
    try {
      console.log(formData);
      await addAnimal(formdata);

      message.success("Animal saved!");
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  const props = {
    onRemove: () => {
      setFormData({ ...formData, file: "" });
      console.log(formData);
    },
    beforeUpload: (file) => {
      setFormData({ ...formData, file: file });
      return false;
    },
  };

  return (
    <Container textAling="center">
      <FormContent>
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
          <Upload maxCount={1} {...props}>
            <Button icon={<UploadOutlined />}>Attach photo</Button>
          </Upload>
          <DefaultButton
            htmlType="submit"
            size="large"
            icon={<FileAddOutlined />}
          >
            Add animal
          </DefaultButton>
        </Form>
      </FormContent>
    </Container>
  );
};

export default AnimalForm;
