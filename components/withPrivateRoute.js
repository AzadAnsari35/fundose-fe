import { useSelector } from "react-redux";
import NotFound from "../pages/404";

const withPrivateRoute = (Component) => {
  const Auth = (props) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
