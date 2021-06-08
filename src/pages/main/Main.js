import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

import HeroImg from "../../assets/images/hero.jpg";

import {
  Container,
  Title,
  SubTitle,
  Navigate,
  List,
} from "../../components/shared/styles/layout";
import { Hero, HeroContent } from "../../components/shared/styles/hero/hero";
import { colors } from "../../components/shared/styles/global";
import HeroCarousel from "./components/Carousel";

const Main = () => {
  return (
    <>
      <Hero>
        <img src={HeroImg} alt="charity"></img>
        <Container>
          <HeroContent>
            <Title
              color={colors.white}
              marginBottom="20px"
              lineHeight="1"
              fontSize="50px"
            >
              Changing Lives Locally
            </Title>
            <SubTitle color={colors.white} marginBottom="20px">
              When you adopt pet, you’re changing their life and yours. Make a
              difference for a homeless pet and bring love home.
            </SubTitle>
            <Navigate to="/profile">
              <span style={{ marginRight: "10px" }}>adopt</span>{" "}
              <ArrowRightOutlined />
            </Navigate>
          </HeroContent>
        </Container>
      </Hero>
      <Container>
        <List>
          <Title>Give with Confidence</Title>
          <SubTitle weight={"500"} marginBottom={"20px"}>
            For 17 years in a row, we've earned the highest rating from Charity
            Navigator and remain in the top 1% of all charities ranked. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </SubTitle>
        </List>
        <HeroCarousel />
      </Container>
    </>
  );
};

export default Main;
