import React from "react";
import { Title, SubTitle, AdditionalInfo, Section } from "../styles/layout";
import { colors } from "../styles/global";

const NotFound = ({ linkTo, text }) => {
  return (
    <Section flexDirection="column">
      <Title color={colors.primary}>Page Not Found</Title>
      <SubTitle color={colors.secondary}>Sorry, {text}</SubTitle>
      <AdditionalInfo to={linkTo}>move back</AdditionalInfo>
    </Section>
  );
};

export default NotFound;
