import {
  Box,
  Typography,
  createStyles,
  makeStyles,
  TextField,
  Button,
  Grid,
  Hidden,
} from "@material-ui/core";
import Link from "next/link";

const frontImg = "/images/g12.svg";
const backgroundimg = "/images/Background.png";

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Box width="100%" height="100vh">
      <Grid container className={classes.gird_container}>
        <Grid item lg={6} sm={6} xs={12}>
          <Box className={classes.grid_box}>
            <Typography className={classes.heading}>Welcome back</Typography>
            <TextField
              variant="outlined"
              type="name"
              className={classes.text_field}
              label="Entert your email address"
            />
            <TextField
              variant="outlined"
              type="password"
              className={classes.password_field}
              label="Password"
            />
            <Box className={classes.frgt_btn_box}>
              <Button className={classes.frgt_btn}>forgot password</Button>
            </Box>
            <Button className={classes.loginbtn}>Login</Button>
            <Box className={classes.footer_box}>
              <Typography className={classes.bottom_text} variant="subtitle2">
                Don't have an account?
              </Typography>
              <Link href="/signup">
                <Button className={classes.create_btn}>
                  Create new account
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Hidden smDown>
          <Grid item sm={6}>
            <Box className={classes.rightcontainer}>
              <Box className={classes.headingbox}>
                <Typography className={classes.toptext}>
                  Learn with Ease{" "}
                </Typography>
                <Typography className={classes.bottomtext}>
                  Take your learing to Next Level
                </Typography>
              </Box>

              <img src={frontImg} className={classes.img} />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    gird_container: {
      height: "100%",
    },
    grid_box: {
      display: "flex",
      flexDirection: "column",
      padding: "20%",
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
      marginTop: "4px",
      "&:hover": {
        // color: "#fff",
      },
    },
    loginbtn: {
      background: "#2E45D5",
      color: "#F1F1F1",
      marginTop: "6%",
      fontFamily: "Poppins",
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
      loginbtn: {
        height: "48px",
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

export default LoginPage;