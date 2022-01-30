import React, { useState } from "react";
import Layout from "@/components/Layout";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

const levelArray = [
  {
    id: 1,
    label: "Trainee Level",
  },
  {
    id: 2,
    label: "Associate Level",
  },
  {
    id: 3,
    label: "Senior Associate Level",
  },
  {
    id: 4,
    label: "Assistant Manager Level",
  },
  {
    id: 5,
    label: "Manager Level",
  },
  {
    id: 6,
    label: "Associate Director Level",
  },
  {
    id: 7,
    label: "Director Level",
  },
  {
    id: 8,
    label: "Executive Partner Level",
  },
  {
    id: 9,
    label: "Partner Level",
  },
  {
    id: 10,
    label: "Senior Partner Level",
  },
];

const defaultTheme = createTheme();
const onMobile = defaultTheme.breakpoints.only("xs");

export default function Levels() {
  const classes = useStyles();

  const [currentLevel, setCurrentLevel] = useState(1);

  return (
    <Layout>
      <div className={classes.container}>
        {levelArray.reverse().map(({ id, label }) => (
          <Typography
            variant="body2"
            component="div"
            className={`${classes.level} ${
              currentLevel > id
                ? classes.visited
                : currentLevel === id
                ? classes.current
                : ""
            }`}
            key={id}
          >
            {label}
          </Typography>
        ))}
      </div>
    </Layout>
  );
}

const useStyles = makeStyles({
  container: {
    paddingTop: 120,
    width: "60%",
    margin: "0 auto",
    [onMobile]: {
      width: "100%",
      paddingTop: 0,
    },
  },

  level: {
    display: "flex",
    justifyContent: "center",
    background: "#F0EE51",
    borderRadius: 8,
    padding: "12px 0px",
    marginBottom: "16px",
  },

  visited: {
    background: "#BABABA",
  },
  current: {
    background: "#2FBF0B",
  },
});
