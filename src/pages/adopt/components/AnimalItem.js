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
    avatar,
  },
}) => {
  return (
    <Item>
      <Photo>
        {avatar ? (
          <img
            style={{ height: "100%", objectFit: "cover" }}
            src={avatar}
            alt={name}
          />
        ) : (
          <img
            style={{ height: "100%", objectFit: "cover" }}
            src={defaultImg}
            alt={name}
          />
        )}
      </Photo>
      <Name>
        {name} / {type} / {sex}
      </Name>
      <Breed>{breedName}</Breed>
      <AdditionalInfo to={`/profile/${_id}`}>learn more</AdditionalInfo>{" "}
    </Item>
  );
};
