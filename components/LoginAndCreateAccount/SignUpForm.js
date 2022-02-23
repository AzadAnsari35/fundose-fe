import "date-fns";
import {
  Box,
  Typography,
  createStyles,
  makeStyles,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Hidden,
} from "@mui/material";
import Link from "next/link";
const frontImg = "/images/g12.svg";
const backgroundimg = "/images/Background.png";

const CreateAnAccount = () => {
  const classes = useStyles();
  return (
    <Box width="100%" height="100vh">
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Box className={classes.grid_box}>
            <Typography className={classes.heading}>Sign up</Typography>
            <Box className={classes.top_text_field}>
              <TextField
                className={classes.name_field}
                variant="outlined"
                label="Enter your full name"
              />
              <TextField variant="outlined" label="Enter your email address" />
            </Box>
            <Box className={classes.center_text}>
              <FormControl variant="outlined" className={classes.form_Control}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={age}
                  // onChange={handleChange}
                  label="Gender"
                  className={classes.list}
                >
                  <MenuItem value="">
                    <Typography>
                      <em>None</em>
                    </Typography>
                  </MenuItem>
                  <MenuItem className={classes.list} value={10}>
                    <Typography> Male</Typography>
                  </MenuItem>
                  <MenuItem className={classes.list} value={20}>
                    <Typography>Female </Typography>
                  </MenuItem>
                  <MenuItem className={classes.list} value={30}>
                    <Typography>Other </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="date"
                variant="outlined"
                type="date"
                // placeholder='DOB'
                label="DOB"
                className={classes.dob_field}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  root: classes.textInput,
                  input: classes.textInput,
                }}
              />
            </Box>
            <TextField
              label="Password"
              className={classes.passw_text}
              variant="outlined"
              type="password"
            />
            <Button className={classes.sign_btn}>Sign up</Button>

            <Box className={classes.footer_box}>
              <Typography className={classes.bottom_text}>
                Have an account?
              </Typography>
              <Link href="/login">
                <Button className={classes.login_btn}>Log in</Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Hidden smDown >
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
    heading: {
      fontSize: "48px",
      lineHeight: "72px",
      color: "#2E45D5",
      fontSize: "43px",
      fontFamily: "Poppins",
    },
    login_btn: {
      color: "#2E45D5",
      textTransform: "initial",
      fontSize: "small",
      fontFamily: "Poppins",
    },
    grid_box: {
      display: "flex",
      flexDirection: "column",
      padding: "20%",
    },
    top_text_field: {
      display: "flex",
      flexDirection: "column",
      marginTop: "4%",
      fontFamily: "Poppins",
    },
    name_field: {
      paddingBottom: "4%",
    },
    dob_field: {
      marginLeft: "10%",
      width: "212px",
    },
    center_text: {
      marginTop: "4%",
      display: "flex",
      justifyContent: "space-between",
    },
    // formControl:{
    //   width:"44%",
    // },
    passw_text: {
      marginTop: "4%",
    },

    sign_btn: {
      background: "#2E45D5",
      color: "#F1F1F1",
      fontFamily: "Poppins",
      marginTop: "6%",
      "&:hover": {
        // background: "#2E45D5",
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
    "@media only screen and (max-width: 750px)": {
      grid_box: {
        display: "flex",
        padding: "20% 12%",
        flexDirection: "column",
      },
      sign_btn: {
        height: "48px",
        marginTop: "15%",
      },
      top_text_field: {
        marginTop: "10%",
        paddingBottom: "5%",
      },
      name_field: {
        paddingBottom: "6%",
      },
      center_text: {
        paddingBottom: "4%",
      },
    },
  })
);

export default CreateAnAccount;
