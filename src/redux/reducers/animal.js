import {
  GET_ANIMALS,
  ANIMALS_ERROR,
  GET_ANIMAL,
  CLEAR_PROFILE,
  ANIMAL_LOADING,
  ANIMAL_DELETED,
  SET_FILTER,
} from "../actions/types";

const initialState = {
  loading: true,
  animals: [],
  count: 0,
  profile: null,
};

export default function AnimalReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ANIMAL_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ANIMAL:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
    case ANIMAL_DELETED:
      return {
        ...state,
        animals: state.animals.filter((animal) => animal._id !== payload),
        loading: false,
      };
    case GET_ANIMALS:
      return {
        ...state,
        animals: payload.animals,
        count: payload.count,
        loading: false,
      };
    case ANIMALS_ERROR:
      return {
        ...state,
        loading: false,
        animals: [],
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
}
