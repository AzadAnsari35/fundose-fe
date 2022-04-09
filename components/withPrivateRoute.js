import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withPrivateRoute = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
      if (!isLoggedIn) {
        return router.push("/");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withPrivateRoute;
