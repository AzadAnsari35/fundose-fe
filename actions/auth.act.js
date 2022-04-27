import * as types from "@/actions/types";
import { toast } from "react-toastify";
import api from "@/api/index";
import { hideModal } from "./common.act";

export const signup = (data) => async (dispatch) => {
  try {
    dispatch({
      type: types.START_LOADER,
    });
    const response = await api.post("/auth/register/", {
      username: data.username,
      password: data.password,
      password2: data.confirmPassword,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
    });
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: response,
    });
    dispatch(hideModal());
    localStorage.setItem("token", response.access_token);
    localStorage.setItem("refreshToken", response.refresh_token);
    toast.success("Successfully logged in");
  } catch (error) {
    dispatch({
      type: types.REGISTER_FAILURE,
    });
    toast.error("error");
  } finally {
    dispatch({
      type: types.STOP_LOADER,
    });
  }
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: types.START_LOADER,
    });
    const response = await api.post("/auth/login/", data);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: response,
    });
    dispatch(hideModal());
    localStorage.setItem("token", response.access);
    localStorage.setItem("refreshToken", response.refresh);
    localStorage.setItem("currentUser", JSON.stringify(response));
    toast.success("Successfully logged in");
  } catch (error) {
    dispatch({
      type: types.LOGIN_FAILURE,
    });
    toast.error("error");
  } finally {
    dispatch({
      type: types.STOP_LOADER,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  dispatch({
    type: types.LOGIN_FAILURE,
  });
};
