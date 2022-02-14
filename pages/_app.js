import "../styles/globals.css";
import theme from "../theme";
import { MuiThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { useStore } from "../store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </Provider>
  );
}

export default MyApp;
