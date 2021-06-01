import React, { useState } from "react";
import { Form, Input, message, Button } from "antd";

import { BackgroundFill, Container, Title } from "../../shared/styles/layout";
import { postEmail } from "../../../services/forgetPassword";
import { AuthContent, LoginContent } from "../../shared/styles/auth/auth";
import LoginImg from "../../../assets/images/login.jpg";
import { colors } from "../../shared/styles/global";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onFinish = async () => {
    try {
      await postEmail({ email });

      message.success("We sent a letter on your email adress");
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  const onChange = (e) => setEmail(e.target.value);

  return (
    <BackgroundFill image={LoginImg}>
      <Container>
        <AuthContent>
          <LoginContent>
            <Title fontSize={"25px"} color={colors.black} weight={"400"}>
              Don't worry, we send a confirmation link on your email
            </Title>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
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
                  onChange={onChange}
                  value={email}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </Form.Item>
              <Button
                style={{
                  marginBottom: "10px",
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                }}
                type="primary"
                htmlType="submit"
                size="large"
              >
                Send an email
              </Button>
            </Form>
          </LoginContent>
        </AuthContent>
      </Container>
    </BackgroundFill>
  );
};

export default ForgotPassword;
