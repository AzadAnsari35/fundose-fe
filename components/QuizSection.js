import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "@/styles/QuizSection.module.css";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuestion, fetchQuestion } from "@/actions/quiz.act";
import DialogBox from "@/components/Modal";
import { useRouter } from "next/router";
import SuccessModal from "@/components/SuccessModal";
import FailureModal from "@/components/FailureModal";

const optionLabel = ["a", "b", "c", "d"];

export default function QuizSection() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const questionObj = useSelector((state) => state.quiz.question);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);

  const handleSelect = (e) => {
    const selected = e.target.getAttribute("data-option");
    console.log("selectedOption", selected);
    setShowModal(true);
  };

  const { question, options } = questionObj || {};

  return (
    <>
      <Box className={styles.quizSection}>
        <div className={styles.questionNumber}>
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
              <Grid item md={6} key={option.id}>
                <Typography
                  variant="body1"
                  className={
                    +selectedOption === option.id
                      ? `${styles.option} ${styles.selected}`
                      : styles.option
                  }
                  data-option={option.id}
                >
                  {optionLabel[index]}){`  `} {option.choice}
                </Typography>
              </Grid>
            ))}
        </Grid>
      </Box>
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
