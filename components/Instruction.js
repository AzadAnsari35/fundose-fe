import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import InstructionIcon from "../public/illustration/instruction.svg";
import Box from "@mui/material/Box";
import { startQuiz } from "@/actions/quiz.act";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { showModal } from "@/actions/common.act";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function Instruction({ topic, handleClose }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleStartQuiz = () => {
    handleClose();
    isLoggedIn
      ? dispatch(startQuiz(router))
      : dispatch(showModal("LOGIN_FORM"));
  };

  return (
    <div
      className={classes.instructionModal}
      // variants={dropIn}
      // initial="hidden"
      // animate="visible"
      // exit="exit"
    >
      <Typography variant="h5" align="center" component="div" color="#666666">
        Welcome to
      </Typography>
      <Typography
        variant="h5"
        align="center"
        component="div"
        color="#2E45D5"
        sx={{ fontWeight: 900 }}
      >
        {topic} Quiz
      </Typography>

      <Typography
        variant="subtitle2"
        component="ul"
        color="#666666"
        sx={{ pl: 0, pt: 4, pb: 5 }}
        className={classes.instructions}
      >
        <li>There are 12 questions you will be assigned</li>
        <li>To answer the questions, you will be getting 45 sec for each </li>
        <li>To win the quiz, you must complete every question</li>
        <li>
          If any answer is wrong the game will be terminated to the exact moment
        </li>
      </Typography>
      <Box display="flex" justifyContent="center">
        <Image
          src={InstructionIcon}
          alt="instruction icon"
          width={100}
          height={100}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" sx={{ mt: 3 }} onClick={handleStartQuiz}>
          Start Quiz
        </Button>
      </Box>
    </div>
  );
}

const useStyles = makeStyles({
  instructionModal: {
    padding: "60px 100px 40px",
  },
  instructions: { lineHeight: "30px" },
});
