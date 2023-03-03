import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { resetGame } from "@/actions/quiz.act";
import { useDispatch } from "react-redux";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();
const onMobile = defaultTheme.breakpoints.only("xs");

export default function FailureModal({ currentScore, handleSound }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    handleSound("button");
    dispatch(resetGame());
  };

  return (
    <div className={classes.failureModal}>
      <img
        src="/static/illustration/failure.svg"
        alt="Picture of the author"
        width={264}
        height={160}
      />
      <Typography variant="overline" component="div" color="#666666">
        Bad luck
      </Typography>
      <Typography
        variant="body1"
        component="div"
        color="#EC536D"
        sx={{ pb: 3 }}
      >
        Try Another Chance
      </Typography>
      <div className={classes.scores}>
        <div className={classes.rank}>
          {/* <img
            src="/static/icons/reward.svg"
            alt="Reward Icon"
            width={30}
            height={30}
          /> */}
          <Box sx={{ pl: 1 }}>
            <a
              href="https://www.catusharmakkar.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Our Courses
            </a>
            {/* <Typography variant="body2" component="div">
              5th Rank
            </Typography>
            <Typography variant="body2" component="div" color="#666666">
              My Ranking
            </Typography> */}
          </Box>
        </div>
        <div className={classes.points}>
          <img
            src="/static/icons/point.svg"
            alt="Reward Icon"
            width={30}
            height={30}
          />
          <Box sx={{ pl: 1 }}>
            <Typography variant="body2" component="div">
              {currentScore} Points
            </Typography>
            <Typography variant="body2" component="div" color="#666666">
              Points Earned
            </Typography>
          </Box>
        </div>
      </div>
      {/* <div className={classes.playAgain}>
        <PlayArrowIcon color="#666666" />
        <Typography variant="subtitle1" component="div" color="#666666" >
          Play Again
        </Typography>
      </div> */}
      <Button variant="contained" onClick={handleNextQuestion}>
        Go to Home
      </Button>
    </div>
  );
}

const useStyles = makeStyles({
  failureModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 140px 28px",
    [onMobile]: {
      padding: "40px 30px 40px",
    },
  },

  scores: {
    display: "flex",
    paddingBottom: 28,
  },

  rank: {
    display: "flex",
    paddingRight: 8,
    borderRight: "1px solid #e4e3e3",
    alignItems: "center",
    color: "#2E45D5",
  },

  points: {
    display: "flex",
    paddingLeft: 8,
  },
  playAgain: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 12,
    cursor: "pointer",
    "& svg": {
      color: "#666666",
      marginRight: 8,
      fontSize: "1.8rem",
    },
  },
});
