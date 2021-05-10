import React from "react";
import { Title, SubTitle, AdditionalInfo, Section } from "../styles/layout";
import { colors } from "../styles/global";

const NotFound = () => {
  return (
    <Section flexDirection="column">
      <Title color={colors.primary}>Page Not Found</Title>
      <SubTitle color={colors.secondary}>Sorry, this page does not exist</SubTitle>
      <AdditionalInfo to="/">move back</AdditionalInfo>
    </Section>
  );
};

export default NotFound;
