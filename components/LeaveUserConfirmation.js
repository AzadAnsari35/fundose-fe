import { useEffect } from "react";
import Router from "next/router";

export const useWarnIfUnsavedChanges = (unsavedChanges, isSuccess) => {
  const message = "Do you want to leave the game?";

  useEffect(() => {
    const routeChangeStart = (url) => {
      if (Router.asPath !== url && unsavedChanges && !confirm(message)) {
        Router.events.emit("routeChangeError");
        Router.replace(Router, Router.asPath);
        // onRouteChangePrevented();
        throw "Abort route change. Please ignore this error.";
      }
    };

    const beforeunload = (e) => {
      if (unsavedChanges) {
        e.preventDefault();
        // onRouteChangePrevented();
        e.returnValue = message;
        return message;
      }
    };

    isSuccess && window.addEventListener("beforeunload", beforeunload);
    isSuccess && Router.events.on("routeChangeStart", routeChangeStart);

    return () => {
      window.removeEventListener("beforeunload", beforeunload);
      Router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [unsavedChanges, isSuccess]);
};
