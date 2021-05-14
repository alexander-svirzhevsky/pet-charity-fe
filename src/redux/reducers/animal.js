import {
  GET_ANIMALS,
  ANIMALS_ERROR,
  GET_ANIMAL,
  CLEAR_ANIMAL,
  ANIMAL_DELETED,
  SET_CURRENT_PAGE,
  SET_FILTER,
} from "../actions/types";

const initialState = {
  loading: true,
  animals: [],
  profile: null,
  pageSize: 5,
  totalAnimalsCount: 0,
  currentPage: 1,
  filter: {
    type: "",
  },
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
        totalAnimalsCount: payload.totalAnimalsCount,
        loading: false,
      };
    case CLEAR_ANIMAL:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
        loading: true,
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
