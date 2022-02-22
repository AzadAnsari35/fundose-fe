import axios from "axios";

const api = axios.create({
  baseURL: "https://fundose.in",
});

api.interceptors.request.use(
  (request) => {
    // Get token and add it to header "Authorization"
    request.headers.Token = "bearer " + localStorage.getItem("token");
    return request;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let subscribers = [];

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

function onRefreshed(token) {
  subscribers.map((cb) => cb(token));
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
      if (!isRefreshing) {
        isRefreshing = true;
        axios
          .post(
            "https://fundose.in/",
            {
              refreshToken: localStorage.getItem("refreshToken"),
            },
            {
              headers: { Token: "bearer " + localStorage.getItem("token") },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              // 1) put token to LocalStorage
              localStorage.setItem("token", res.data.data.accessToken);
              localStorage.setItem("refreshToken", res.data.data.refreshToken);
              isRefreshing = false;
              // onRefreshed(res.data.data.accessToken);
              subscribers = [];
            } else {
              // store.dispatch(actions.logoutOnRefreshExpire());
            }
          })
          .catch((err) => {
            // store.dispatch(actions.logoutOnRefreshExpire());
          })
          .finally(() => {
            isRefreshing = false;
          });
      }

      return new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          originalRequest.headers.Token = `bearer ${token}`;
          resolve(api(originalRequest));
        });
      });
    }
    return Promise.reject(err);
  }
);

export default api;
