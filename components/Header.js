import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LogoIcon from "../public/icons/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { showModal } from "@/actions/common.act";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/actions/auth.act";

export default function Header() {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <Box component="header" className={classes.header}>
      <Image
        src={LogoIcon}
        alt="Picture of the author"
        width={160}
        height={42}
        onClick={() => router.push("/")}
      />
      <Box display="flex" alignItems="center" className={classes.navlink}>
        {isLoggedIn ? (
          <>
            <Typography
              variant="body1"
              component="div"
              align="center"
              color="primary"
            >
              {currentUser.first_name} {currentUser.last_name}
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
              onClick={() => dispatch(showModal("LOGIN_FORM"))}
            >
              Login
            </Typography>
            <Typography
              variant="body1"
              component="div"
              align="center"
              color="primary"
              onClick={() => dispatch(showModal("SIGNUP_FORM"))}
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
  },

  navlink: {
    "& div": {
      padding: "0px 20px",
      cursor: "pointer",
    },
  },
});
