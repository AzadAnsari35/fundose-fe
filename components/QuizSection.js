import FailureModal from "@/components/FailureModal";
import DialogBox from "@/components/Modal";
import SuccessModal from "@/components/SuccessModal";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { makeStyles, createStyles } from "@mui/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import SwapIcon from "../public/icons/swap.svg";
import FiftyIcon from "../public/icons/fifty_fifty.svg";
import { createTheme } from "@mui/material/styles";
import {
  createTheme,
  makeStyles,
  createStyles,
  Grid,
  Box,
  Typography,
} from "@mui/material";

const optionLabel = ["a", "b", "c", "d"];

const defaultTheme = createTheme();

export default function QuizSection() {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const questionObj = useSelector((state) => state.quiz.question);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);

  const handleSelect = (e) => {
    const selected = e.target.getAttribute("data-option");
    console.log("selectedOption", selected);
    setShowModal(true);
  };

  const handleSwap = () => {
    console.log("Swap Question");
  };

  const handleFifty = () => {
    console.log("Fifty - fifty");
  };

  const { question, options } = questionObj || {};

  return (
    <>
      <div className={classes.quizSection}>
        <div className={classes.questionNumber}>
          <div>
            <Typography variant="body1" component="div" color="common.white">
              Question {questionNumber}/12
            </Typography>
            <Typography variant="body1" component="div" color="#F0EE51">
              Score: <b>1234</b>
            </Typography>
          </div>

          <div>Timer</div>
        </div>
        <Typography
          variant="h5"
          component="div"
          color="common.white"
          sx={{ my: 5 }}
        >
          {question}
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={handleSelect}
        >
          {options &&
            options.map((option, index) => (
              <Grid item md={6} xs={12} key={option.id}>
                <Typography
                  variant="body1"
                  className={
                    +selectedOption === option.id
                      ? `${classes.option} ${classes.selected}`
                      : classes.option
                  }
                  data-option={option.id}
                >
                  {optionLabel[index]}){`  `} {option.choice}
                </Typography>
              </Grid>
            ))}
        </Grid>

        <Box display="flex" justifyContent="center">
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
      <DialogBox open={showModal} handleClose={() => setShowModal(false)}>
        {isSuccess ? (
          <SuccessModal handleClose={() => setShowModal(false)} />
        ) : (
          <FailureModal />
        )}
      </DialogBox>
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
