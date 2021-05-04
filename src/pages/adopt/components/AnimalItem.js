import React from "react";

import { AdditionalInfo } from "../../../components/shared/styles/layout";
import {
  Item,
  Photo,
  Name,
  Breed,
} from "../../../components/shared/styles/animal/animalCard";
import defaultImg from "../../../assets/images/default.jpg";

export const AnimalItem = ({
  animal: {
    _id,
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
      <AdditionalInfo to={`/profile/${_id}`}>learn more</AdditionalInfo>{" "}
    </Item>
  );
};
