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
      title="Income Tax Quiz 2023, Income Tax MCQ Online Test, Income Tax Online Quiz, Income Tax MCQ Questions"
      keywords="Income Tax mcq, Income Tax mcq online test, Income Tax mcq questions, Income Tax mcq questions and answers, Income Tax quiz, mcq on Income Tax, Income Tax online quiz, Income Tax quiz online test, mcq for Income Tax, mcq Income Tax, mcq of Income Tax, quiz on Income Tax"
      description="Take the latest and updated Income Tax Quiz for 2023 contains all important Income Tax quiz questions and answers on FunDose."
      copyright="Copyright 2023 Income Tax Quiz 2023, Income Tax MCQ Online Test, Income Tax Online Quiz, Income Tax MCQ Questions"
      subject="Income Tax Quiz 2023, Income Tax MCQ Online Test, Income Tax Online Quiz, Income Tax MCQ Questions"
      generator="https://fundose.in/income-tax-quiz-trivia-mcq-test-question-answers"
      author="Income Tax Quiz 2023, Income Tax MCQ Online Test, Income Tax Online Quiz, Income Tax MCQ Questions"
      handleSound={handleSound}
    >
      <div className={classes.container}>
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
            data-topic="Income Tax"
            data-id="1"
            onClick={handleClick}
          >
            <img
              src="/static/icons/it.svg"
              alt="Income Tax Icon"
              width={40}
              height={40}
            />
            <Typography variant="body1" component="div" sx={{ paddingLeft: 1 }}>
              Start Quiz
            </Typography>
          </Button>
        </Box>
        <Typography variant="h3" component="h1" sx={{ paddingBottom: 2 }}>
          Unleash Your Knowledge on India's Direct Taxes with Our Quizzes!
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          Attention B.Com Students and CA & CMA Candidates: Want to ace your
          Income Tax exams and stand out from the crowd? Look no further! Our
          Income Tax MCQs on India's Direct Taxes are designed to help you gain
          in-depth knowledge of the subject, and to test your understanding of
          complex concepts of India’s Direct taxation. Whether you're preparing
          for a competitive exam or just want to improve your Income tax
          knowledge, our Income Tax MCQs will provide you with the tools you
          need to succeed.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          With a wide range of Income Tax MCQs, covering all aspects of direct
          taxes in India, our Income Tax quizzes are the perfect way to boost
          your confidence and enhance your understanding of Income Tax system of
          India. You'll get instant solutions of all Income Tax MCQs, so you can
          track your progress and identify areas of Income Tax syllabus where
          you need to improve.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Don't wait any longer – start your journey to mastery of India's
          Direct Taxes today! Try our Income Tax MCQs and take the first step
          towards in doing fool-proof preparation of upcoming Income tax
          examination.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Test Your Knowledge of Tax Laws on Income from House Property with Our
          MCQ Quizzes!
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          Attention Taxation Enthusiasts: Are you ready to put your
          understanding of Tax Laws on Income from House Property to the test?
          Our Income Tax MCQs are here to help you do just that! With Income Tax
          MCQs based on the latest exam patterns, you'll be able to gauge your
          knowledge of the complex topics of Income Tax and take your
          understanding of Income Tax to the next level.
        </Typography>
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
            data-topic="Income Tax"
            data-id="1"
            onClick={handleClick}
          >
            <img
              src="/static/icons/it.svg"
              alt="Income Tax Icon"
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
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          Our Income Tax MCQs are designed to provide you with detailed answers,
          so you can understand the concepts behind every Income Tax MCQ. This
          means that you'll be able to build your knowledge regarding the latest
          Income Tax laws and structure in a comprehensive and meaningful way
          and you'll be able to see the connections between different parts of
          the Income Tax system.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Whether you're preparing for a competitive exam or simply want to
          improve your understanding of Tax Laws on Income from House Property,
          our Income Tax MCQs are the perfect tool for you. So what are you
          waiting for? Start testing your knowledge today with our expertly
          designed Income Tax MCQs and see how far you've come!
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Ace Your CA Foundation Exam with Our Income Tax MCQ Quizzes!
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          Are you ready to tackle the toughest Income Tax MCQs on the 2023
          Foundation Course Exam syllabus? Our Income Tax MCQs are here to help
          you prepare! With Income Tax MCQs based on the latest exam pattern,
          you'll be able to test your knowledge about Income Tax and ensure that
          you're fully prepared for the big day.
        </Typography>

        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          Our Income Tax MCQs are designed to help you understand the key
          concepts and principles of Income Tax, and to ensure that you're ready
          to tackle any Income Tax MCQ that comes your way. With detailed
          answers provided for each Income Tax MCQ, you'll be able to build your
          Income Tax knowledge in a comprehensive and meaningful way, and you'll
          be able to see the connections between different parts of the Income
          Tax.
        </Typography>

        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          So why wait? Start your preparation for upcoming Income Tax
          examination with our Income Tax MCQs and ensure your success! Enroll
          now and take the first step towards acing your CA Foundation Exam.
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
            data-topic="Income Tax"
            data-id="1"
            onClick={handleClick}
          >
            <img
              src="/static/icons/it.svg"
              alt="Income Tax Icon"
              width={40}
              height={40}
            />
            <Typography variant="body1" component="div" sx={{ paddingLeft: 1 }}>
              Start Quiz
            </Typography>
          </Button>
        </Box>
      </div>
      <DialogBox open={showModal} handleClose={() => setShowModal(false)}>
        <Instruction
          topic="Income Tax"
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
