import "../styles/globals.css";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalModalProvider from "../components/GlobalModalProvider";
import { useEffect, useState } from "react";
import * as types from "../actions/types";

let store;

function MyApp({ Component, pageProps }) {
  const getLocalStorageItem = (key) => {
    return typeof window !== undefined
      ? window.localStorage.getItem(key)
      : null;
  };

  useEffect(() => {
    const currentUser = JSON.parse(getLocalStorageItem("currentUser"));
    store.dispatch({ type: types.LOGIN_SUCCESS, payload: currentUser });
  }, []);

  const initialState = {};
  store = useStore(initialState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
        <GlobalModalProvider />
      </ThemeProvider>
    </Provider>
  );
}

export { store };

export default MyApp;
