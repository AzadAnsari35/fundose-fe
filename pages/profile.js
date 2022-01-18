import React from "react";
import { makeStyles } from "@mui/styles";

export default function Profile() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.card}>Hi</div>
      <div className={classes.card}></div>
    </div>
  );
}

const useStyles = makeStyles({
  card: {
    padding: "28px 36px",
    background: "#FFFFFF",
    borderRadius: 25,
  },

  personalInfo: {},
  globalRanking: {},
});
