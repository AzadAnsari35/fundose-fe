import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

export default function Loader() {
  const isLoading = useSelector((state) => state.common.isLoading);
  const classes = useStyles();
  return (
    isLoading && (
      <div className={classes.loader}>
        <CircularProgress classes={{ root: classes.loaderRoot }} />
      </div>
    )
  );
}

const useStyles = makeStyles({
  loader: {
    position: "fixed",
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
    zIndex: 1301,
  },
  loaderRoot: {
    position: "fixed",
    right: "50%",
    top: "50%",
  },
});
