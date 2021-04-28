import axios from "axios";
import { ADD_BREED, ADD_TYPE, ADD_FAIL, ADD_ANIMAL } from "../actions/types";

export const addType = ({ type }) => async (dispatch) => {
  const body = { type };
  try {
    const res = await axios.post("/api/animalType", body);

    dispatch({
      type: ADD_TYPE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.message;
    dispatch({
      type: ADD_FAIL,
    });
    return errors;
  }
};

export const addBreed = ({ breedName, type }) => async (dispatch) => {
  const body = { breedName, type };
  try {
    const res = await axios.post("/api/breed", body);

    dispatch({
      type: ADD_BREED,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.message;
    dispatch({
      type: ADD_FAIL,
    });
    return errors;
  }
};

export const addAnimal = ({ name, sex, breedName, type }) => async (
  dispatch
) => {
  const body = { name, sex, breedName, type };
  try {
    const res = await axios.post("/api/animal", body);

    dispatch({
      type: ADD_ANIMAL,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.message;
    dispatch({
      type: ADD_FAIL,
    });
    return errors;
  }
};
