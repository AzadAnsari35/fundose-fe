import FailureModal from "@/components/FailureModal";
import DialogBox from "@/components/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles } from "@mui/styles";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import SwapIcon from "../public/icons/swap.svg";
import FiftyIcon from "../public/icons/fifty_fifty.svg";
import { createTheme } from "@mui/material/styles";
import api from "@/api/index";
import * as types from "../actions/types";
import { fetchQuestion } from "@/actions/quiz.act";
import has from "lodash/has";
import Level from "@/components/Level";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useWarnIfUnsavedChanges } from "@/components/LeaveUserConfirmation";
import { motion } from "framer-motion";

const optionLabel = ["a", "b", "c", "d"];

const defaultTheme = createTheme();

const LEVEL_MODAL_CLOSE_TIME = 2500;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function QuizSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const timerRef = useRef();
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [countdown, setCountdown] = useState(45);
  const [timerKey, setTimerKey] = useState(0);
  const questionObj = useSelector((state) => state.quiz.question);

  const handleSelect = async (e) => {
    const choiceId = e.target.getAttribute("data-option");
    try {
      dispatch({
        type: types.START_LOADER,
      });
      const response = await api.post("/quiz/submit-choice/", {
        question_choice_id: choiceId,
        enc_ts: enc_ts,
      });
      const correctAnswer = !has(response, "game_status");
      setShowModal(true);
      setIsSuccess(correctAnswer);
      setCurrentScore(response.current_game_score);
      if (correctAnswer) {
        dispatch(fetchQuestion(response));
        setQuestionNumber((questionNumber) => questionNumber + 1);
        setTimerKey((key) => key + 1);
        // stopTimer();
        // timerRef.current.resetTimer();
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: types.STOP_LOADER,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        handleModalClose();
      }, LEVEL_MODAL_CLOSE_TIME);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, showModal]);

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        console.log("dialog");
        // router.push(router.asPath);
        // return false;
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  useEffect(() => {
    if (countdown === 0) {
      setShowModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);

  const handleModalClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setShowModal(false);
  };

  const handleSwap = () => {
    console.log("Swap Question");
  };

  const handleFifty = () => {
    console.log("Fifty - fifty");
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const renderTime = ({ remainingTime }) => {
    setCountdown(remainingTime);
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" component="div" color="#Ffffff">
          {remainingTime}s
        </Typography>
      </Box>
    );
  };

  const { ques, choices, enc_ts } = questionObj || {};

  return (
    <>
      <div className={classes.quizSection}>
        <div className={classes.questionNumber}>
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <Typography variant="body1" component="div" color="common.white">
              Question {questionNumber}/12
            </Typography>
            <Typography variant="body1" component="div" color="#F0EE51">
              Score: <b>{currentScore}</b>
            </Typography>
          </motion.div>

          <Box
            display="flex"
            justifyContent="center"
            component={motion.div}
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            {/* <CircularTimer
              ref={timerRef}
              seconds={45}
              size={80}
              strokeBgColor="black"
              strokeColor="lavender"
              strokeWidth={8}
              showFailureModal={setShowModal}
              setIntervalId={setIntervalId}
              intervalId={intervalId}
            /> */}
            <CountdownCircleTimer
              key={timerKey}
              isPlaying
              duration={questionNumber === 1 ? 45 : 47}
              colors="lavender"
              size={100}
              strokeWidth={9}
              trailColor="#000000"
            >
              {renderTime}
            </CountdownCircleTimer>
          </Box>
        </div>
        <Typography
          variant="h5"
          color="common.white"
          sx={{ my: 5 }}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {ques?.title}
        </Typography>

        <Grid
          container
          spacing={2}
          component={motion.div}
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={handleSelect}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {choices &&
            choices.map((choice, index) => (
              <Grid
                item
                component={motion.div}
                md={6}
                xs={12}
                key={choice.id}
                variants={item}
                whileTap={{ scale: 0.9 }}
              >
                <Typography
                  variant="body1"
                  className={
                    +selectedOption === choice.id
                      ? `${classes.option} ${classes.selected}`
                      : classes.option
                  }
                  data-option={choice.id}
                >
                  {optionLabel[index]}){`  `} {choice.label}
                </Typography>
              </Grid>
            ))}
        </Grid>

        <Box display="flex" justifyContent="center" sx={{ pt: 5 }}>
          <Image
            src={SwapIcon}
            alt="SwapIcon Icon"
            width={70}
            height={70}
            className=""
            onClick={handleSwap}
          />
          <Image
            src={FiftyIcon}
            alt="SwapIcon Icon"
            width={70}
            height={70}
            className=""
            onClick={handleFifty}
          />
        </Box>
      </div>

      {isSuccess ? (
        <DialogBox
          open={showModal}
          handleClose={handleModalClose}
          fullScreen={true}
        >
          <Level />
        </DialogBox>
      ) : (
        <DialogBox open={showModal} handleClose={handleModalClose}>
          <FailureModal />
        </DialogBox>
      )}
    </>
  );
}

const useStyles = makeStyles(() => {
  const onMobile = defaultTheme.breakpoints.only("xs");

  return createStyles({
    quizSection: {
      padding: "140px 200px",
      [onMobile]: {
        padding: 0,
      },
    },

    questionNumber: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 32px",
      backgroundColor: " #7386ff",
      boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.1)",
      borderRadius: 8,
    },

    level: {
      color: "#a1aeb7",
      textTransform: "uppercase",
      paddingTop: 12,
    },

    option: {
      padding: 16,
      color: "#313245",
      borderRadius: 5,
      cursor: "pointer",
      backgroundColor: "#f1f1f1",
      "&:hover": {
        transitionDuration: "0.75s",
        transitionDelay: "0.1s",
        backgroundColor: "#2fbf0b",
        color: "#f1f1f1",
      },
    },

    selected: {
      transitionDuration: "0.75s",
      transitionDelay: "0.1s",
      backgroundColor: "#2fbf0b",
      color: "#f1f1f1",
    },
  });
});
