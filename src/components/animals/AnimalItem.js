import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import defaultImg from "../../assets/images/default.jpg";

const Item = styled.div`
  margin-top: 23px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #efefef;
  width: 321px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 49px;
`;

const Photo = styled.div`
  width: 321px;
  height: 321px;
  margin-bottom: 10px;
`;
const Name = styled.span`
  display: block;
  margin: auto;
  font-weight: 700;
  font-size: 1.625rem;
  color: #002169;
`;
const Breed = styled.span`
  display: block;
  margin: auto;
  color: #00a2c7;
  font-weight: 700;
`;

const LearnMore = styled(Link)`
  display: block;
  margin: auto;
  color: #002169;
  font-size: 15px;
  font-weight: bold;
  line-height: 21px;
`;

export const AnimalItem = ({
  animal: {
    name,
    sex,
    type: { type },
    breedName: { breedName },
  },
}) => {
  return (
    <Item>
      <Photo>
        <img src={defaultImg} alt="pet" />
      </Photo>
      <Name>
        {name} / {type} / {sex}
      </Name>
      <Breed>{breedName}</Breed>
      <LearnMore>learn more</LearnMore>
    </Item>
  );
};
