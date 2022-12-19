import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";

export default function SuccessModal({ handleClose }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleNextQuestion = () => {
    handleClose();
  };

  return (
    <div className={classes.successModal}>
      <span className={classes.confettiIcon}>
        <Image
          src="/illustration/success.svg"
          alt="Confetti Illustration"
          width={588}
          height={80}
        />
      </span>
      <Image
        src="/illustration/success.svg"
        alt="Success Illustration"
        width={264}
        height={160}
      />
      <Typography variant="overline" component="div" color="#666666">
        Congratulations
      </Typography>
      <Typography
        variant="body1"
        component="div"
        color="#EC536D"
        sx={{ pb: 3 }}
      >
        You have completed all the levels
      </Typography>
      <div className={classes.scores}>
        <div className={classes.rank}>
          <Image
            src="/icons/reward.svg"
            alt="Reward Icon"
            width={30}
            height={30}
          />
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
          <Image
            src="/icons/point.svg"
            alt="Reward Icon"
            width={30}
            height={30}
          />
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
      <Button variant="contained" onClick={handleNextQuestion}>
        Next Question
      </Button>
    </div>
  );
}

const useStyles = makeStyles({
  successModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
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

  confettiIcon: {
    position: "absolute",
    top: 0,
  },
});
