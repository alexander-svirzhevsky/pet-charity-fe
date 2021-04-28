import axios from "axios";
import { GET_ANIMALS, ANIMALS_ERROR } from "../actions/types";

export const getAnimals = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/animal");

    dispatch({
      type: GET_ANIMALS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ANIMALS_ERROR,
    });
  }
};
