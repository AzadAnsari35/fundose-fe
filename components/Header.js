import React, { useState } from "react";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import LogoIcon from "../public/icons/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
// import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LoginForm from "@/components/LoginAndCreateAccount/LoginForm";
import SignUpForm from "@/components/LoginAndCreateAccount/SignUpForm";
import DialogBox from "./Modal";

export default function Header() {
  const router = useRouter();
  const classes = useStyles();
  const [loginModal, setLoginModal] = useState(false);
  const [SignModal, setSignModal] = useState(false);

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
        <Typography
          variant="body1"
          component="div"
          align="center"
          color="primary"
          onClick={() => setLoginModal(true)}
        >
          Login
        </Typography>

        <Typography
          variant="body1"
          component="div"
          align="center"
          color="primary"
          onClick={() => setSignModal(true)}
        >
          Register
        </Typography>
      </Box>
      <DialogBox
        open={loginModal || SignModal}
        handleClose={() => setLoginModal(false)}
      >
        <>
          {loginModal && <LoginForm />}
          {SignModal && <SignUpForm />}
        </>
      </DialogBox>
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
