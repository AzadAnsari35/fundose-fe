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
      title="GST Quiz 2023, GST MCQ Online Test, Gst Online Quiz, GST MCQ Questions"
      keywords="gst mcq, gst mcq online test, gst mcq questions, gst mcq questions and answers, gst quiz, mcq on gst, gst online quiz, gst quiz online test, mcq for gst, mcq gst, mcq of gst, quiz on gst"
      description="Take the latest and updated GST Quiz for 2023 contains all important gst quiz questions and answers on FunDose."
      copyright="Copyright 2023 GST Quiz 2023, GST MCQ Online Test, Gst Online Quiz, GST MCQ Questions"
      subject="GST Quiz 2023, GST MCQ Online Test, Gst Online Quiz, GST MCQ Questions"
      generator="https://fundose.in/gst-quiz-trivia-mcq-test-question-answers"
      author="GST Quiz 2023, GST MCQ Online Test, Gst Online Quiz, GST MCQ Questions"
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
            data-topic="GST"
            data-id="2"
            onClick={handleClick}
          >
            <img
              src="/static/icons/gst.svg"
              alt="Gst Icon"
              width={40}
              height={40}
            />
            <Typography variant="body1" component="div" sx={{ paddingLeft: 1 }}>
              Start Quiz
            </Typography>
          </Button>
        </Box>
        <Typography variant="h3" component="h1">
          GST MCQ Quiz 2023
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 3, paddingTop: 6, textAlign: "justify" }}
        >
          Welcome to the world of GST in India! The Goods and Services Tax (GST)
          is one of the most important indirect taxes in India, affecting
          commerce and trade in the country. With its complex rules and
          regulations, it can be difficult to fully understand and grasp the GST
          system. That's why we've created this webpage to provide you with all
          the information you need to know about GST in India.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          But that's not all! We also understand the importance of practical
          application when it comes to studying the GST system. That's why we've
          created a set of GST MCQ quizzes to help commerce stream students
          preparing for upcoming entrance examinations. Our quizzes have been
          carefully prepared by analyzing the latest exam patterns and syllabus,
          ensuring that you receive the best study material for your revision
          and preparation. Whether you're a student or a professional, our GST
          MCQ quizzes are the perfect tool for you to enhance your knowledge of
          the GST system in India. So, start your journey to success with our
          GST MCQ quizzes today!{" "}
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Conquer the CA Intermediate Exam with Our GST MCQ Quizzes!
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Get ready to ace your CA Intermediate exam with our GST MCQ Quizzes!
          Our quizzes are specifically designed to provide you with the best
          revision material for the latest GST syllabus of CA Inter. With a
          focus on the latest exam pattern, our quizzes will help you master the
          key concepts and increase your chances of success. Whether you're a
          student or a professional, our GST MCQ Quizzes are the perfect study
          tool for you. So, don't wait, start revising today and ace your CA
          Intermediate exam!{" "}
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
            data-topic="GST"
            data-id="2"
            onClick={handleClick}
          >
            <img
              src="/static/icons/gst.svg"
              alt="Gst Icon"
              width={40}
              height={40}
            />
            <Typography variant="body1" component="div" sx={{ paddingLeft: 1 }}>
              Start Quiz
            </Typography>
          </Button>
        </Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Pass Your 2023 CA Intermediate Exam with Confidence using Our GST MCQ
          Quizzes!
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Maximize your chances of success in the 2023 CA Intermediate exam with
          our comprehensive set of GST MCQ quizzes! Our GST MCQ quizzes cover
          all the essential sections of the 2023 CA Intermediate exam syllabus,
          ensuring you receive the best revision material. Not only that, but
          our GST MCQ quizzes come complete with answers, making them the
          perfect study material for both revision and preparation of upcoming
          2023 CA Intermediate exam. Whether you're looking to reinforce your
          understanding of key concepts of India’s Goods and Services Tax or get
          a feel for the 2023 CA Intermediate exam pattern, our GST MCQ quizzes
          have you covered. So, why wait? Get started with our GST MCQ quizzes
          today and ace the 2023 CA Intermediate exam!{" "}
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Crack Your CA Foundation Course GST Exam with Ease: Try Our GST MCQ
          Quizzes Today!
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Our GST MCQ quizzes are specially designed to cover all the major
          chapters of the GST syllabus that will be asked in your CA Foundation
          Course Exam. Our GST MCQs includes question from Administration,
          Collection of GST within Indian Borders, GST Registration laws, Laws
          related to Offenses and Penalties and other related concepts of
          India's GST system that is the part of CA foundation course. With a
          focus on the latest exam pattern and syllabus of CA Foundation Course
          Exam, our GST MCQ quizzes are the perfect study material for your
          revision and preparation. And, with detailed solutions provided for
          each question of these quizzes, you'll be able to understand the key
          concepts of Indian GST system and improve your chances of success in
          answering all the questions correctly and confidently in your CA
          foundation exam. Don't wait, start your preparation of the 2023 CA
          Foundation Course with our GST MCQ quizzes today!{" "}
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
            data-topic="GST"
            data-id="2"
            onClick={handleClick}
          >
            <img
              src="/static/icons/gst.svg"
              alt="Gst Icon"
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
          topic="GST"
          handleClose={() => setShowModal(false)}
          subjectId={2}
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
