import axios from "axios";
import {
  GET_ANIMALS,
  ANIMALS_ERROR,
  GET_ANIMAL,
  CLEAR_ANIMAL,
  ANIMAL_DELETED,
  SET_CURRENT_PAGE,
  SET_FILTER,
} from "../actions/types";

export const getAnimals = (currentPage, pageSize, type) => async (dispatch) => {
  dispatch({ type: CLEAR_ANIMAL });

  try {
    const res = await axios.get(
      `/api/animal?page=${currentPage}&limit=${pageSize}&type=${type}`
    );

    dispatch({
      type: GET_ANIMALS,
      payload: {
        animals: res.data.data,
        totalAnimalsCount: res.data.total,
      },
    });
  } catch (err) {
    dispatch({
      type: ANIMALS_ERROR,
    });
  }
};

export const setCurrentPage = (currentPage) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  });
};

export const setFilter = (type) => async (dispatch) => {
  dispatch({
    type: SET_FILTER,
    payload: { type },
  });
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

export const deleteAnimal = (id) => async (dispatch) => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    try {
      await axios.delete(`api/animal/${id}`);

      dispatch({
        type: ANIMAL_DELETED,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: ANIMALS_ERROR,
      });
    }
  }
};
