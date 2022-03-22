import "../styles/globals.css";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let store;

function MyApp({ Component, pageProps }) {
  store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
}

export { store };

export default MyApp;
