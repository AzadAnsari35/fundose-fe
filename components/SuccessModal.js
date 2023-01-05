import React, { useRef, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { resetGame } from "@/actions/quiz.act";
import html2canvas from "html2canvas";
import Certificate from "./Certificate";

export default function SuccessModal({ currentScore }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const printRef = useRef(null);

  const handleClick = () => {
    dispatch(resetGame());
  };

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, {
      width: 1145,
      height: 810,
    });

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div className={classes.successModal}>
      <span className={classes.confettiIcon}>
        <img
          src="/static/illustration/confetti.svg"
          alt="Confetti Illustration"
          width={588}
          height={80}
        />
      </span>
      <img
        src="/static/illustration/success.svg"
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
        sx={{ pb: 1 }}
      >
        You have completed all the levels
      </Typography>
      <Typography
        variant="body2"
        component="div"
        sx={{ mb: 3, cursor: "pointer" }}
        onClick={handleDownloadImage}
      >
        Download your certificate
      </Typography>
      <Box
        ref={printRef}
        sx={{ position: "absolute", left: -10000, top: "auto" }}
      >
        <Certificate />
      </Box>
      <div className={classes.scores}>
        {/* <div className={classes.rank}>
          <img
            src="/static/icons/reward.svg"
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
        </div> */}
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
      <Button variant="contained" onClick={handleClick}>
        Go To Home
      </Button>
    </div>
  );
}

const useStyles = makeStyles({
  successModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 140px 28px",
    // [onMobile]: {
    //   padding: "40px 30px 40px",
    // },
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
