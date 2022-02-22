export const logoutOnRefreshExpire = () => (dispatch) => {
  dispatch({});
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};
