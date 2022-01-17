import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import SuccessIcon from "../public/illustration/success.svg";
import styles from "@/styles/SuccessModal.module.css";
import Typography from "@mui/material/Typography";
import RewardIcon from "../public/icons/reward.svg";
import PointIcon from "../public/icons/point.svg";
import ConfettiIcon from "../public/illustration/confetti.svg";

import Box from "@mui/material/Box";
import { incrementQuestion } from "@/actions/quiz.act";
import { useDispatch } from "react-redux";

export default function SuccessModal({ handleClose }) {
  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    dispatch(incrementQuestion());
    handleClose();
  };

  return (
    <div className={styles.successModal}>
      <span className={styles.confettiIcon}>
        <Image
          src={ConfettiIcon}
          alt="Confetti Illustration"
          width={588}
          height={80}
        />
      </span>
      <Image
        src={SuccessIcon}
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
      <div className={styles.scores}>
        <div className={styles.rank}>
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
        <div className={styles.points}>
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
      <Button variant="contained" onClick={handleNextQuestion}>
        Next Question
      </Button>
    </div>
  );
}
