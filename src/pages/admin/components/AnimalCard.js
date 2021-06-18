import React from "react";
import { useDispatch } from "react-redux";
import { deleteAnimal, getAnimals } from "../../../redux/thunks/animal";
import { DeleteOutlined } from "@ant-design/icons";
import {
  Item,
  Name,
  Breed,
} from "../../../components/shared/styles/animal/animalCard";
import { DeleteButton } from "../../../components/shared/styles/layout";

const AnimalCard = ({
  animal: {
    _id,
    name,
    sex,
    type: { type },
    breedName: { breedName },
  },
  filterCriteria,
}) => {
  const dispatch = useDispatch();

  const onFinish = (id) => {
    dispatch(deleteAnimal(id));
    dispatch(
      getAnimals(
        filterCriteria.currentPage,
        filterCriteria.pageSize,
        filterCriteria.type,
        filterCriteria.sex
      )
    );
  };

  return (
    <Item alignItems="center" padding="20px">
      <Name>
        {name} / {type} / {sex}
      </Name>
      <Breed marginBottom="25px">{breedName}</Breed>
      <DeleteButton
        onClick={() => onFinish(_id)}
        margin="0"
        icon={<DeleteOutlined />}
      >
        Delete
      </DeleteButton>
    </Item>
  );
};

export default AnimalCard;
