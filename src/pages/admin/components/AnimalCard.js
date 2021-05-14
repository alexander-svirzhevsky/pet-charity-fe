import React from "react";
import { useDispatch } from "react-redux";
import { deleteAnimal } from "../../../redux/thunks/animal";
import {
  Item,
  Name,
  Breed,
} from "../../../components/shared/styles/animal/animalCard";
import { Btn } from "../../../components/shared/styles/layout";

const AnimalCard = ({
  animal: {
    _id,
    name,
    sex,
    type: { type },
    breedName: { breedName },
  },
}) => {
  const dispatch = useDispatch();

  const onFinish = (id) => {
    dispatch(deleteAnimal(id));
  };

  return (
    <Item alignItems="center" padding="20px">
      <Name>
        {name} / {type} / {sex}
      </Name>
      <Breed marginBottom="25px">{breedName}</Breed>
      <Btn
        onClick={() => onFinish(_id)}
        hoverColor="#f51d24"
        borderColor="#f51d24"
        color="#f51d24"
        padding="0 30px"
        fontSize="14px"
        fontWeight="600"
      >
        delete
      </Btn>
    </Item>
  );
};

export default AnimalCard;
