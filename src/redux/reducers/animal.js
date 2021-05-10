import {
  GET_ANIMALS,
  ANIMALS_ERROR,
  GET_ANIMAL,
  CLEAR_ANIMAL,
} from "../actions/types";

const initialState = {
  loading: true,
  animals: [],
  profile: null,
};

export default function AnimalReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ANIMAL:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case GET_ANIMALS:
      return {
        ...state,
        animals: payload,
        loading: false,
      };
    case CLEAR_ANIMAL:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    case ANIMALS_ERROR:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
}
