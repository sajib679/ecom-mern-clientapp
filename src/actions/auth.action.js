import axios from "../helpers/axios";
import { authConstants, cartConstants } from "./constant";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.SIGNUP_REQUEST });
    const res = await axios.post("/signup", { ...user });
    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: authConstants.SIGNUP_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        const { error } = res.data;

        dispatch({
          type: authConstants.SIGNUP_FAILURE,
          payload: { error },
        });
      }
    }
  };
};

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post("/signin", { ...user });
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      if (res.status === 400) {
        const { error } = res.data;

        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));

      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to Login" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axios.post("/signout");
    if (res.status === 200) {
      localStorage.clear();
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
      });
      dispatch({ type: cartConstants.RESET_CART });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
