import axios from "axios";
import { message } from "antd";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCCESS,
  LOGIN_FAIL,
  LOGOUT,
  FAIL_GOOGLE_AUTH,
  AUTH_GOOGLE,
} from "../actions/types";

import setAuthToken from "../helper/setAuthToken";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const loadGoogleUser =
  ({ email, googleId, token }) =>
  async (dispatch) => {
    const body = { email, googleId, token };

    try {
      const res = await axios.post("/api/googleAuth", body);
      localStorage.setItem("token", res.headers.authorization);
      dispatch({
        type: AUTH_GOOGLE,
        payload: {
          token: res.headers.authorization,
          ...res.data,
        },
      });
      dispatch(loadUser());
    } catch (error) {
      dispatch({
        type: FAIL_GOOGLE_AUTH,
      });
    }
  };

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const body = { name, email, password };
    try {
      const res = await axios.post("/api/users", body);

      localStorage.setItem("token", res.headers.authorization);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          token: res.headers.authorization,
          ...res.data,
        },
      });

      dispatch(loadUser());
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const body = { email, password };

    try {
      const res = await axios.post("/api/auth", body);

      localStorage.setItem("token", res.headers.authorization);

      dispatch({
        type: LOGIN_SUCCCESS,
        payload: {
          token: res.headers.authorization,
          ...res.data,
        },
      });

      dispatch(loadUser());
    } catch (error) {
      message.error(error.response.data.message);

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
