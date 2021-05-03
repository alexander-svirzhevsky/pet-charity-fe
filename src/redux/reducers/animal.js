import { GET_ANIMALS, ANIMALS_ERROR } from "../actions/types";

const initialState = {
  loading: true,
  animals: [],
};

export default function AnimalReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ANIMALS:
      return {
        ...state,
        animals: payload,
        loading: false,
      };
    case ANIMALS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
