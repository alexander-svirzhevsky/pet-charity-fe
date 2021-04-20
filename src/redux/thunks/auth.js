import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

export const register = ({ name, email, password }) => async (dispatch) => {
  const body = { name, email, password };

  try {
    const res = await axios.post("/api/users", body);
    console.log(res);

    localStorage.setItem("token", res.headers.authorization);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
