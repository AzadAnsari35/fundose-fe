import FailureModal from "@/components/FailureModal";
import DialogBox from "@/components/Modal";
import SuccessModal from "@/components/SuccessModal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles } from "@mui/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import SwapIcon from "../public/icons/swap.svg";
import FiftyIcon from "../public/icons/fifty_fifty.svg";
import { createTheme } from "@mui/material/styles";
import api from "@/api/index";
import * as types from "../actions/types";
import { fetchQuestion } from "@/actions/quiz.act";
import { useDispatch } from "react-redux";
import has from "lodash/has";
import Timer from "./Timer";

const optionLabel = ["a", "b", "c", "d"];

const defaultTheme = createTheme();

export default function QuizSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentScore, setCurrentScore] = useState(false);

  const questionObj = useSelector((state) => state.quiz.question);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);

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
      setShowModal(true);
      setIsSuccess(!has(response, "game_status"));
      setCurrentScore(response.current_game_score);
      dispatch(fetchQuestion(response));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: types.STOP_LOADER,
      });
    }
  };

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

  const { ques, choices, enc_ts } = questionObj || {};

  return (
    <>
      <div className={classes.quizSection}>
        <div className={classes.questionNumber}>
          <div>
            <Typography variant="body1" component="div" color="common.white">
              Question {questionNumber}/12
            </Typography>
            <Typography variant="body1" component="div" color="#F0EE51">
              Score: <b>{currentScore ?? 0}</b>
            </Typography>
          </div>

          <div>
            <Timer
              seconds={5}
              size={80}
              strokeBgColor="black"
              strokeColor="lavender"
              strokeWidth={8}
              showFailureModal={setShowModal}
            />
          </div>
        </div>
        <Typography
          variant="h5"
          component="div"
          color="common.white"
          sx={{ my: 5 }}
        >
          {ques?.title}
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={handleSelect}
        >
          {choices &&
            choices.map((choice, index) => (
              <Grid item md={6} xs={12} key={choice.id}>
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
        <> </>
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
