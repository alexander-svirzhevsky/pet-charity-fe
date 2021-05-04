import React from "react";

import {
  List,
  Col,
  Title,
  SubTitle,
  Row,
  Heading,
} from "../../../components/shared/styles/layout";
import defaultImg from "../../../assets/images/default.jpg";
import { colors } from "../../../components/shared/styles/global";

const AnimalProfile = ({
  profile: {
    animal: {
      name,
      sex,
      type: { type },
      breedName: { breedName },
      date,
    },
    age,
    color,
    size,
    story,
    location,
    phone,
  },
}) => {
  return (
    <List marginTop="50px">
      <Col>
        <img src={defaultImg} alt={name} />
      </Col>
      <Col>
        <SubTitle color={colors.secondary}>Hi, I'm</SubTitle>
        <Title marginBottom="5px" color={colors.primary}>
          {name}
        </Title>
        <SubTitle color={colors.primary}>
          {breedName} &nbsp; {type}
        </SubTitle>
        <br></br>
        <SubTitle color={colors.secondary}>currently located at</SubTitle>
        <SubTitle marginBottom="30px" color={colors.primary}>
          {location}
        </SubTitle>

        <Row marginBottom="30px" width="60%" justify="space-between">
          <div>
            <SubTitle color={colors.secondary}>age</SubTitle>
            <span>{age}</span>
          </div>
          <div>
            <SubTitle color={colors.secondary}>gender</SubTitle>
            <span>{sex}</span>
          </div>
          <div>
            <SubTitle color={colors.secondary}>color</SubTitle>
            <span>{color}</span>
          </div>
        </Row>
        <Row marginBottom="30px" justify="flex-start">
          <div>
            <SubTitle color={colors.secondary}>size</SubTitle>
            <span>{size}</span>
          </div>
        </Row>
        <Heading color={colors.primary} marginBottom="20px">
          My story
        </Heading>
        <p>{story}</p>
        <SubTitle color={colors.primary}>Phone: {phone} </SubTitle>
      </Col>
    </List>
  );
};

export default AnimalProfile;
