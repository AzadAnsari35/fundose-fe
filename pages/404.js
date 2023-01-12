import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
// import NotFoundImg from "../public/images/404.svg";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function NotFound() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img
          src="/static/images/404.svg"
          alt="404 image"
          width={500}
          height={400}
        />
        <Typography
          variant="h2"
          align="center"
          component="div"
          className={classes.heading}
        >
          OOPS
        </Typography>
        <Typography variant="h3" align="center" component="div" color="#666666">
          Page Not Found
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          className={classes.btn}
          onClick={() => router.push("/")}
        >
          Go to home
        </Button>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: { backgroundImage: `url(${"static/images/404_background.svg"})` },
  heading: {
    color: "#666666",
    fontWeight: "800 !important",
    paddingBottom: 12,
  },
  btn: {
    width: 300,
    marginTop: 100,
  },
});
