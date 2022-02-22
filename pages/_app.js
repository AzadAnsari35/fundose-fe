import "../styles/globals.css";
import theme from "../theme";
import { MuiThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
      </MuiThemeProvider>
    </Provider>
  );
}

export default MyApp;
