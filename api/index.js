import axios from "axios";
import * as types from "@/actions/types";
import { store } from "../pages/_app";
import { logout } from "../actions/auth.act";

const LOGGED_IN_API_URL = "/auth/login/";
const REGISTER_API_URL = "/auth/register/";

const api = axios.create({
  baseURL: "https://fundose.in",
});

api.interceptors.request.use(
  (request) => {
    if (request.url !== LOGGED_IN_API_URL && request.url !== REGISTER_API_URL) {
      // Get token and add it to header "Authorization"
      request.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }

    return request;
  },
  (error) => Promise.reject(error)
);

let subscribers = [];

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

const responseHandler = (response) => {
  return response.data;
};

api.interceptors.response.use(
  (response) => responseHandler(response),
  (err) => {
    const {
      config,
      response: { status },
    } = err;
    const originalRequest = config;

    if (status === 401 && localStorage.getItem("refreshToken") !== null) {
      return axios
        .post("https://fundose.in/auth/refresh-token/", {
          refresh: localStorage.getItem("refreshToken"),
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.access);
            return api(originalRequest);
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(logout());
          }
          console.log("err", error.response);
          return Promise.reject(error);
        })
        .finally(() => {
          store.dispatch({ type: types.STOP_LOADER });
        });

      // return new Promise((resolve) => {
      //   subscribeTokenRefresh((token) => {
      //     originalRequest.headers.Token = `bearer ${token}`;
      //     resolve(api(originalRequest));
      //   });
      // });
    }
    return Promise.reject(err);
  }
);

export default api;
