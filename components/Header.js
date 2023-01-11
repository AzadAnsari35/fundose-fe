import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { showModal } from "@/actions/common.act";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/actions/auth.act";
import Link from "next/link";
import { createTheme } from "@mui/material/styles";

const LogoImage = "/static/icons/logo.svg";

const defaultTheme = createTheme();
const onMobile = defaultTheme.breakpoints.only("xs");

export default function Header({ handleSound }) {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogout = () => {
    handleSound("text");
    dispatch(logout());
    router.push("/");
  };

  const handleLogin = () => {
    handleSound("text");
    dispatch(showModal("LOGIN_FORM"));
  };

  const handleRegister = () => {
    handleSound("text");
    dispatch(showModal("SIGNUP_FORM"));
  };

  return (
    <Box component="header" className={classes.header}>
      <div className={classes.imageContainer}>
        <img
          src={LogoImage}
          alt="Picture of the author"
          onClick={() => router.push("/")}
          width={160}
          height={44}
        />
      </div>

      <Box display="flex" alignItems="center" className={classes.navlink}>
        {isLoggedIn ? (
          <>
            <Typography
              variant="body1"
              component="div"
              align="center"
              color="primary"
            >
              <a
                href="https://www.catusharmakkar.com/"
                target="_blank"
                rel="noreferrer"
              >
                Practical Courses
              </a>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              align="center"
              color="primary"
              sx={{ textTransform: "capitalize" }}
            >
              <Link href="/profile">
                <a>
                  {currentUser?.first_name} {currentUser?.last_name}
                </a>
              </Link>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              align="center"
              color="primary"
              onClick={handleLogout}
            >
              Logout
            </Typography>
          </>
        ) : (
          <>
            <Typography
              variant="body1"
              component="div"
              align="center"
              color="primary"
            >
              <a
                href="https://www.catusharmakkar.com/"
                target="_blank"
                rel="noreferrer"
              >
                Practical Courses
              </a>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              align="center"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Typography>
            <Typography
              variant="body1"
              component="div"
              align="center"
              color="primary"
              onClick={handleRegister}
            >
              Register
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "12px 40px",
    width: "80%",
    position: "absolute",
    top: 20,
    left: "50%",
    transform: "translate(-50%, 0)",
    borderRadius: 50,
    [onMobile]: {
      width: "100%",
      padding: "12px 25px",
    },
  },

  navlink: {
    "& div": {
      padding: "0px 20px",
      cursor: "pointer",
      [onMobile]: {
        padding: "0px 10px",
      },
    },
  },
  imageContainer: {
    height: "100%",
    [onMobile]: {
      width: "30%",
      height: 28,
    },
  },
});
