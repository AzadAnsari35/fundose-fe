import "../styles/globals.css";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalModalProvider from "../components/GlobalModalProvider";
import { useEffect, useState } from "react";

let store;

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState({});

  const getLocalStorageItem = (key) => {
    return typeof window !== undefined
      ? window.localStorage.getItem(key)
      : null;
  };

  useEffect(() => {
    setCurrentUser(JSON.parse(getLocalStorageItem("currentUser")));
  }, []);

  const initialState = {
    auth: {
      isLoggedIn: !!currentUser?.access,
      currentUser: currentUser,
    },
  };
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
