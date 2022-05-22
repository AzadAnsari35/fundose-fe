import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import FailureIcon from "../public/illustration/failure.svg";
import Typography from "@mui/material/Typography";
import RewardIcon from "../public/icons/reward.svg";
import PointIcon from "../public/icons/point.svg";
import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { makeStyles } from "@mui/styles";
import { resetGame } from "@/actions/quiz.act";
import { useDispatch } from "react-redux";

export default function FailureModal({ handleClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    dispatch(resetGame());
  };

  return (
    <div className={classes.failureModal}>
      <Image
        src={FailureIcon}
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
          <Image src={RewardIcon} alt="Reward Icon" width={30} height={30} />
          <Box sx={{ pl: 1 }}>
            <Typography variant="body2" component="div">
              5th Rank
            </Typography>
            <Typography variant="body2" component="div" color="#666666">
              My Ranking
            </Typography>
          </Box>
        </div>
        <div className={classes.points}>
          <Image src={PointIcon} alt="Reward Icon" width={30} height={30} />
          <Box sx={{ pl: 1 }}>
            <Typography variant="body2" component="div">
              434 Points
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
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "linear-gradient(180deg, #FFA5A8 0%, #FFFFFF 60.26%)",
    boxShadow: 24,
    padding: "60px 140px 28px",
    borderRadius: 16,
    "&:focus-visible ": {
      outline: "none",
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
