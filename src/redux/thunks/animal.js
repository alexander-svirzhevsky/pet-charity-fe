import axios from "axios";
import {
  GET_ANIMALS,
  ANIMALS_ERROR,
  GET_ANIMAL,
  CLEAR_ANIMAL,
} from "../actions/types";

export const getAnimals = () => async (dispatch) => {
  dispatch({ type: CLEAR_ANIMAL });

  try {
    const res = await axios.get("/api/animal");

    dispatch({
      type: GET_ANIMALS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ANIMALS_ERROR,
    });
  }
};

export const getAnimalById = (animalId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/${animalId}`);

    dispatch({
      type: GET_ANIMAL,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ANIMALS_ERROR,
    });
  }
};
