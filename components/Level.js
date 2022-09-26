import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import SuccessModal from "./SuccessModal";
import { incrementLevel } from "@/actions/quiz.act";
import { useSelector, useDispatch } from "react-redux";
const backgroundimg = "/images/Background.png";

const levelArray = [
  {
    id: 1,
    label: "Trainee Level 1",
  },
  {
    id: 2,
    label: "Trainee Level 2",
  },
  {
    id: 3,
    label: "Trainee Level 3",
  },
  {
    id: 4,
    label: "Associate Level",
  },
  {
    id: 5,
    label: "Senior Associate Level",
  },
  {
    id: 6,
    label: "Assistant Manager Level",
  },
  {
    id: 7,
    label: "Manager Level",
  },
  {
    id: 8,
    label: "Associate Director Level",
  },
  {
    id: 9,
    label: "Director Level",
  },
  {
    id: 10,
    label: "Executive Partner Level",
  },
  {
    id: 11,
    label: "Partner Level",
  },
  {
    id: 12,
    label: "Senior Partner Level",
  },
];

const levelArr = levelArray.reverse();

const defaultTheme = createTheme();
const onMobile = defaultTheme.breakpoints.only("xs");

export default function Levels() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const [currentLevel, setCurrentLevel] = useState(1);

  const currentLevel = useSelector((state) => state.quiz.level);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(incrementLevel());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (levelArr.length - 1 === currentLevel) {
    return <SuccessModal />;
  }

  return (
    <div className={classes.container}>
      {levelArr.map(({ id, label }) => (
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
  );
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    padding: "120px 300px 0px",
    margin: "0 auto",
    backgroundImage: `url(${backgroundimg})`,
    [onMobile]: {
      width: "100%",
      paddingTop: 0,
    },
  },

  level: {
    display: "flex",
    justifyContent: "center",
    background: "#FFFFFF",
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
