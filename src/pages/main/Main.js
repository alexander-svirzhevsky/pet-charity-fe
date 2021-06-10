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
import Translate from "../../assets/i18n/Translate";

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
              {Translate("heroTitle")}
            </Title>
            <SubTitle color={colors.white} marginBottom="20px">
              {Translate("heroDesc")}
            </SubTitle>
            <Navigate to="/profile">
              <span style={{ marginRight: "10px" }}>{Translate("adopt")}</span>{" "}
              <ArrowRightOutlined />
            </Navigate>
          </HeroContent>
        </Container>
      </Hero>
      <Container>
        <List>
          <Title>{Translate("aboutUs")}</Title>
          <SubTitle weight={"500"} marginBottom={"20px"}>
            {Translate("heroText")}
          </SubTitle>
        </List>
        <HeroCarousel />
      </Container>
    </>
  );
};

export default Main;
