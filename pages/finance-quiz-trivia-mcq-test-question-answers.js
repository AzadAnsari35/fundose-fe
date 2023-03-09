/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogBox from "@/components/Modal";
import Instruction from "@/components/Instruction";
import { createTheme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

const defaultTheme = createTheme();

export default function GSTPage({ handleSound }) {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    handleSound("button");
    setShowModal(true);
  };

  return (
    <Layout
      title="Finance Quiz 2023, Finance MCQ Online Test, Finance Online Quiz, Finance MCQ Questions"
      keywords="Finance mcq, Finance mcq online test, Finance mcq questions, Finance mcq questions and answers, Finance quiz, mcq on Finance, Finance online quiz, Finance quiz online test, mcq for Finance, mcq Finance, mcq of Finance, quiz on Finance"
      description="Take the latest and updated Finance Quiz for 2023 contains all important Finance quiz questions and answers on FunDose."
      copyright="Copyright 2023 Finance Quiz 2023, Finance MCQ Online Test, Finance Online Quiz, Finance MCQ Questions"
      subject="Finance Quiz 2023, Finance MCQ Online Test, Finance Online Quiz, Finance MCQ Questions"
      generator="https://fundose.in/finance-quiz-trivia-mcq-test-question-answers"
      author="Finance Quiz 2023, Finance MCQ Online Test, Finance Online Quiz, Finance MCQ Questions"
      handleSound={handleSound}
    >
      <Box className={classes.container}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 8,
          }}
        >
          <Button
            variant="primary"
            sx={{ marginTop: 8, border: "1px solid white" }}
            data-topic="Finance"
            data-id="3"
            onClick={handleClick}
          >
            <img
              src="/static/icons/finance.svg"
              alt="Finance Icon"
              width={40}
              height={40}
            />
            <Typography variant="body1" component="div" sx={{ paddingLeft: 1 }}>
              Start Quiz
            </Typography>
          </Button>
        </Box>
        <Typography variant="h3" component="h1" sx={{ paddingBottom: 2 }}>
          Looking To Strengthen Your Financial Accounting Understanding? Try
          Expertly Designed Finance MCQs{" "}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          Welcome to the Indian Financial System knowledge hub! Our Finance MCQs
          is designed to help users enhance their understanding of the Indian
          financial sector. Whether you're a student, professional, or simply
          interested in finance, our Finance MCQs provides a comprehensive
          resource for all things related to the Indian financial system.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          Our Finance MCQs encompasses a wide range of Finance related topics
          are prepared to develop an in-depth understanding of Finance MCQs.
          Whether you’re looking to brush up on basic financial concepts or dive
          deep into complex financial instruments, Our Finance MCQs has you
          covered.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          From banking to insurance, investment to taxation, Our Finance MCQs
          offers a comprehensive overview of the Indian financial system.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          So why wait? Start your journey to financial enlightenment today and
          join our community of like-minded individuals on the quest to improve
          their knowledge of the Indian financial system.ion of upcoming Income
          tax examination.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Banking and Finance MCQ with Answers
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          The banking and finance MCQs with answers on our website are a
          valuable resource for users looking to test and improve their
          knowledge of the Indian financial system.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          By answering Our Finance MCQs, users can assess their understanding of
          key concepts of Indian Financial system and identify areas of
          understanding about Indian financial system that needs special
          attention. The immediate feedback provided by the answers of the
          finance MCQs allows users to quickly understand whether they have
          answered correctly, allowing them to reinforce their understanding of
          the concept raised in the MCQ.
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: 4,
            paddingBottom: 8,
          }}
        >
          <Button
            variant="primary"
            sx={{ border: "1px solid white" }}
            data-topic="Finance"
            data-id="3"
            onClick={handleClick}
          >
            <img
              src="/static/icons/finance.svg"
              alt="Finance Icon"
              width={40}
              height={40}
            />
            <Typography variant="body1" component="div" sx={{ paddingLeft: 1 }}>
              Start Quiz
            </Typography>
          </Button>
        </Box>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Additionally, Our Finance MCQs can be used as a study tool for
          students preparing for exams or professionals preparing for
          certifications. Overall, the banking and finance MCQs with answers on
          our website provide a useful and effective way for users to improve
          their knowledge of the Indian financial system.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Corporate Business Finance MCQ quizzes
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          Our Corporate Business Finance MCQ quizzes are designed specifically
          to help users deepen their understanding of the finance of the Indian
          corporate world. These Finance MCQs are a valuable resource for anyone
          looking to build their knowledge of this complex and ever-evolving
          sector.
        </Typography>

        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          The Corporate Business Finance MCQs cover a range of topics related to
          corporate finance, including financial planning and analysis, working
          capital management, capital structure, and mergers and acquisitions.
          With each question, users can test their understanding of key concepts
          and gain a deeper understanding of the financial landscape of the
          Indian corporate world.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          These Corporate Finance MCQs are designed to be challenging, yet
          accessible, ensuring that users of all levels can benefit from taking
          these quizzes.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          In addition to providing a comprehensive overview of corporate finance
          in India, our Corporate Business Finance MCQs comes with detailed
          answers that are provided in layman’s lingo. This allows you to
          quickly assess your understanding of the topic in question and analyze
          a
        </Typography>

        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Start enhancing your understanding of the finance of the Indian
          corporate world today with our Corporate Business Finance MCQ quizzes.
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="primary"
            sx={{ marginTop: 8, border: "1px solid white" }}
            data-topic="Finance"
            data-id="3"
            onClick={handleClick}
          >
            <img
              src="/static/icons/finance.svg"
              alt="Finance Icon"
              width={40}
              height={40}
            />
            <Typography variant="body1" component="div" sx={{ paddingLeft: 1 }}>
              Start Quiz
            </Typography>
          </Button>
        </Box>
      </Box>
      <DialogBox open={showModal} handleClose={() => setShowModal(false)}>
        <Instruction
          topic="Finance"
          handleClose={() => setShowModal(false)}
          subjectId={1}
          handleSound={handleSound}
        />
      </DialogBox>
    </Layout>
  );
}

const useStyles = makeStyles(() => {
  const onMobile = defaultTheme.breakpoints.only("xs");

  return createStyles({
    container: {
      color: "white",
      padding: "120px 120px",
      [onMobile]: {
        padding: "0px 10px",
      },
    },
  });
});
