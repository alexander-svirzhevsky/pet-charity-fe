import React from "react";

import { AdditionalInfo } from "../shared/styles/layout";
import { Item, Photo, Name, Breed } from "../shared/styles/animal/animalCard";
import defaultImg from "../../assets/images/default.jpg";

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
        <img src={defaultImg} alt={name} />
      </Photo>
      <Name>
        {name} / {type} / {sex}
      </Name>
      <Breed>{breedName}</Breed>
      <AdditionalInfo>learn more</AdditionalInfo>
    </Item>
  );
};