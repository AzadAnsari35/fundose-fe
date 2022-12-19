import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { startQuiz } from "@/actions/quiz.act";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { showModal } from "@/actions/common.act";
import { motion } from "framer-motion";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

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

const onMobile = defaultTheme.breakpoints.only("xs");

export default function Instruction({
  topic,
  handleClose,
  subjectId,
  handleSound,
}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleStartQuiz = () => {
    handleClose();
    handleSound("button");
    isLoggedIn
      ? dispatch(startQuiz(subjectId))
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
        <li>You will be assigned 12 questions</li>
        <li>You will get 45 seconds to answer each question</li>
        <li>To win the quiz, you must complete every question</li>
        <li>
          If any answer is wrong the game will be terminated to the exact moment
        </li>
      </Typography>
      <Box display="flex" justifyContent="center">
        <Image
          src="/illustration/instruction.svg"
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
    [onMobile]: {
      padding: "40px 30px 40px",
    },
  },
  instructions: { lineHeight: "30px" },
});
