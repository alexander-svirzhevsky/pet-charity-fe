import { ADD_TYPE, ADD_BREED, ADD_ANIMAL, ADD_FAIL } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TYPE:
    case ADD_BREED:
    case ADD_ANIMAL:
      return {
        ...state,
        ...payload,
      };
    case ADD_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
