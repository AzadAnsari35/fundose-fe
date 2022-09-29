import { signup } from "@/actions/auth.act";
import { showModal } from "@/actions/common.act";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { createStyles, makeStyles } from "@mui/styles";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FormSvg from "../public/illustration/form.svg";
import { useForm } from "react-hook-form";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const backgroundimg = "/images/Background.png";

const SignUpForm = ({ handleSound }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      first_name: "",
      last_name: "",
    },
  });

  const [state, setState] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  const onSubmit = (data) => {
    handleSound("button");
    dispatch(signup(data));
  };

  const handleClickShowPassword = (key) => {
    handleSound("shutter");
    setState({
      ...state,
      [key]: !state[key],
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className={classes.signupFormModal}>
      <Grid container>
        <Grid item sm={12} xs={12}>
          <Box className={classes.grid_box}>
            <Typography className={classes.heading}>Sign up</Typography>

            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <TextField
                  variant="outlined"
                  label="First Name"
                  name="firstName"
                  fullWidth
                  {...register("firstName", { required: "Required" })}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName?.message}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  variant="outlined"
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  {...register("lastName", { required: "Required" })}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName?.message}
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <TextField
                  variant="outlined"
                  label="Username"
                  name="username"
                  fullWidth
                  {...register("username", { required: "Required" })}
                  error={errors.username ? true : false}
                  helperText={errors.username?.message}
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  fullWidth
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter valid email",
                    },
                  })}
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <TextField
                  type={state.showPassword ? "text" : "password"}
                  label="Password"
                  name="password"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            handleClickShowPassword("showPassword")
                          }
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...register("password", {
                    required: "Required",
                    minLength: {
                      value: 6,
                      message: "Password should be of minimum 6 letters",
                    },
                  })}
                  error={errors.password ? true : false}
                  helperText={errors.password?.message}
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <TextField
                  type={state.showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  name="confirmPassword"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            handleClickShowPassword("showConfirmPassword")
                          }
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {state.showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...register("confirmPassword", {
                    required: "Required",
                    validate: (value) =>
                      value === watch("password") ||
                      "The passwords do not match",
                  })}
                  error={errors.confirmPassword ? true : false}
                  helperText={errors.confirmPassword?.message}
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <Button
                  className={classes.sign_btn}
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>

            <Box className={classes.footer_box}>
              <Box display="flex">
                <Typography className={classes.bottom_text}>
                  Have an account?
                </Typography>
                <div
                  className={classes.login_btn}
                  onClick={() => dispatch(showModal("LOGIN_FORM"))}
                >
                  Log in
                </div>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => {
  const onMobile = defaultTheme.breakpoints.only("xs");

  return createStyles({
    signupFormModal: {
      width: 580,
      [onMobile]: {
        width: "80%",
      },
    },
    heading: {
      fontSize: "48px",
      lineHeight: "72px",
      color: "#2E45D5",
      fontSize: "43px",
      fontFamily: "Poppins",
      marginBottom: 20,
    },
    login_btn: {
      color: "#2E45D5",
      textTransform: "initial",
      fontSize: 14,
      fontFamily: "Poppins",
      padding: 0,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      paddingLeft: 4,
    },
    grid_box: {
      display: "flex",
      flexDirection: "column",
      padding: "60px 60px",
      [onMobile]: {
        padding: 30,
      },
    },

    sign_btn: {
      background: "#2E45D5",
      color: "#F1F1F1",
      fontFamily: "Poppins",
      marginTop: 20,
      padding: 14,
      width: "100%",
      borderRadius: 4,
      "&:hover": {
        background: "#1877f2",
        color: "#F1F1F1",
      },
    },
    footer_box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "4%",
    },
    bottom_text: {
      fontSize: "14px",
      lineHeight: "27px",
      color: "#666666",
      fontFamily: "Poppins",
    },
    form_Control: {
      width: "44%",
    },
    list: {
      textDecoration: "none",
    },
    rightcontainer: {
      backgroundImage: `url(${backgroundimg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100%",
      display: "flex",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
    toptext: {
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
    textInput: {
      color: "#f2f2f2 !important",
      fontSize: "10px !important",
    },
    form_Control: {
      width: "187px",
    },
  });
});

export default SignUpForm;
