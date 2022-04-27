/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Hidden,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

import { showModal } from "@/actions/common.act";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../actions/auth.act";

const backgroundimg = "/images/Background.png";

const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  return (
    <Box className={classes.loginFormModal}>
      <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
          <Box className={classes.grid_box}>
            <Typography className={classes.heading}>Welcome back</Typography>
            <TextField
              variant="outlined"
              type="name"
              className={classes.text_field}
              value={username}
              label="Enter your email address"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              type="password"
              className={classes.password_field}
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box className={classes.frgt_btn_box}>
              <div className={classes.frgt_btn}>forgot password</div>
            </Box>
            <Button className={classes.loginbtn} onClick={handleLogin}>
              Login
            </Button>
            <Box className={classes.footer_box}>
              <Typography className={classes.bottom_text} variant="subtitle2">
                Don't have an account?
              </Typography>
              <div
                className={classes.create_btn}
                onClick={() => dispatch(showModal("SIGNUP_FORM"))}
              >
                Create new account
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    loginFormModal: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      width: 580,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      boxShadow: 24,
      borderRadius: 8,
      "&:focus-visible ": {
        outline: "none",
      },
    },

    grid_box: {
      display: "flex",
      flexDirection: "column",
      padding: "80px 60px",
    },
    heading: {
      marginBottom: "10%",
      fontWeight: "600",
      fontSize: "48px",
      lineHeight: "72px",
      color: "#2E45D5",
      textTransform: "capitalize",
      fontFamily: "Poppins",
    },

    text_field: {
      paddingBottom: "6%",
    },
    frgt_btn_box: {
      display: "flex",
      justifyContent: "flex-end",
    },

    frgt_btn: {
      fontSize: "13px",
      lineHeight: "24px",
      color: "#666666",
      textTransform: "capitalize",
      fontFamily: "Poppins",
      marginTop: "12px",
      cursor: "pointer",
      "&:hover": {
        // color: "#fff",
      },
    },
    loginbtn: {
      background: "#2E45D5",
      color: "#F1F1F1",
      marginTop: "6%",
      fontFamily: "Poppins",
      borderRadius: 4,
      height: "48px",
      "&:hover": {
        // background: "#2E45D5",
        background: "#1877f2",
        color: "#F1F1F1",
      },
    },

    create_btn: {
      color: "#2E45D5",
      textTransform: "initial",
      fontFamily: "Poppins",
      cursor: "pointer",
      paddingLeft: 4,
      fontSize: "14px",
    },

    footer_box: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "6%",
    },

    bottom_text: {
      fontSize: "14px",
      lineHeight: "27px",
      color: "#666666",
      fontFamily: "Poppins",
    },
    "@media only screen and (max-width: 750px)": {
      bottom_text: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "-0.28px",
      },
      grid_box: {
        display: "flex",
        padding: "20% 12%",
        flexDirection: "column",
      },
      heading: {
        marginBottom: "2%",
        fontSize: "48px",
        fontWeight: "600",
        lineHeight: "60px",
      },
      footer_box: {
        display: "flex",
        flexDirection: "column",
        marginTop: "13%",
      },
      create_btn: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "-0.28px",
      },

      frgt_btn_box: {
        marginTop: "9%",
      },
      password_field: {
        height: "45px",
      },
      text_field: {
        marginTop: "12%",
        height: "45px",
        paddingBottom: "26%",
      },
    },
    rightcontainer: {
      backgroundImage: `url(${backgroundimg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100%",
      display: "flex",
      // justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
    toptext: {
      // fontStyle: "normal",
      fontWeight: "500",
      fontSize: "40px",
      lineHeight: "72px",
      color: "#FFFFFF",
      fontFamily: "Poppins",
    },
    bottomtext: {
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "36px",
      color: "#FFFFFF",
      fontFamily: "Poppins",
    },
    headingbox: {
      marginTop: "19%",
    },
    img: {
      marginTop: "8%",
      width: "auto",
    },
  })
);

export default LoginForm;
