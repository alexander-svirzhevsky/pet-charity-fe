import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

export const register = ({ name, email, password }) => async (dispatch) => {
  const body = { name, email, password };

  try {
    const res = await axios.post("/api/users", body);
    console.log(res);

    if (res.status === 200) {
      localStorage.setItem("token", res.headers.authorization);
    }

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
