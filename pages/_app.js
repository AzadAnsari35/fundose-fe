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

//Sound
import useSound from "use-sound";
import pleasantPorridge from "../public/sounds/pleasant-porridge.mp3";
import click from "../public/sounds/click.mp3";
import button from "../public/sounds/button.mp3";
import shutter from "../public/sounds/shutter.mp3";
import wingame from "../public/sounds/wingame.mp3";
import wrong from "../public/sounds/wrong.mp3";
import text from "../public/sounds/toggle.mp3";
import ClearIcon from "@mui/icons-material/Clear";
let store;

function MyApp({ Component, pageProps }) {
  const getLocalStorageItem = (key) => {
    return typeof window !== undefined
      ? window.localStorage.getItem(key)
      : null;
  };

  // const [playMusic, { pause }] = useSound(pleasantPorridge, {
  //   loop: true,
  //   autoplay: true,
  //   volume: 0.5,
  // });

  //// Sounds ////
  const [playClick] = useSound(click, { volume: "0.25" });
  const [playButton] = useSound(button, { volume: "0.5" });
  const [playShutter] = useSound(shutter, { volume: "0.5" });
  const [playCorrect] = useSound(wingame, { volume: "0.5" });
  const [playWrong] = useSound(wrong, { volume: "0.5" });
  const [playText] = useSound(text, { volume: "0.5" });

  // Switch Function to play sounds //
  function handleSound(sound) {
    switch (sound) {
      case "click":
        playClick();
        break;
      case "button":
        playButton();
        break;
      case "shutter":
        playShutter();
        break;
      case "correct":
        playCorrect();
        break;
      case "wrong":
        playWrong();
        break;
      case "text":
        playText();
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    const currentUser = JSON.parse(getLocalStorageItem("currentUser"));
    if (currentUser)
      store.dispatch({ type: types.LOGIN_SUCCESS, payload: currentUser });
  }, []);

  const initialState = {};
  store = useStore(initialState);
  const modifiedPageProps = { ...pageProps, handleSound };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...modifiedPageProps} />
        <ToastContainer theme="colored" />
        <GlobalModalProvider handleSound={handleSound} />
      </ThemeProvider>
    </Provider>
  );
}

export { store };

export default MyApp;
