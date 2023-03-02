/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogBox from "@/components/Modal";
import Instruction from "@/components/Instruction";

export default function GSTPage({ handleSound }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    handleSound("button");
    setShowModal(true);
  };

  return (
    <Layout
      title="Audit Quiz 2023, Audit MCQ Online Test, Audit Online Quiz, Audit MCQ Questions"
      keywords="Audit mcq, Audit mcq online test, Audit mcq questions, Audit mcq questions and answers, Audit quiz, mcq on Audit, Audit online quiz, Audit quiz online test, mcq for Audit, mcq Audit, mcq of Audit, quiz on Audit"
      description="Take the latest and updated Audit Quiz for 2023 contains all important Audit quiz questions and answers on FunDose."
      copyright="Copyright 2023 Audit Quiz 2023, Audit MCQ Online Test, Audit Online Quiz, Audit MCQ Questions"
      subject="Audit Quiz 2023, Audit MCQ Online Test, Audit Online Quiz, Audit MCQ Questions"
      generator="https://fundose.in/audit-quiz-trivia-mcq-test-question-answers"
      author="Audit Quiz 2023, Audit MCQ Online Test, Audit Online Quiz, Audit MCQ Questions"
      handleSound={handleSound}
    >
      <Box
        sx={{
          color: "white",
          padding: "150px 120px",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ paddingBottom: 2 }}>
          Audit MCQ Auditing and Management Professionals
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ paddingBottom: 2, textAlign: "justify" }}
        >
          Auditing is an independent examination of financial information of an
          organization to make sure that the financial statements accurately
          represent the financial performance and position of the organization.
          In India, auditing is governed by the Institute of Chartered
          Accountants of India (ICAI) and is an important aspect of corporate
          governance.
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          B.Com students and candidates of various professional exams like
          Chartered Accountant and Company Secretary require a sound knowledge
          of Indian auditing as it plays a critical role in the financial
          reporting and decision-making process of organizations. Additionally,
          a thorough understanding of Indian auditing standards and practices is
          essential for these professionals to effectively perform their duties,
          whether it be preparing financial statements, conducting internal
          audits, or providing assurance services to clients. Hence, make a
          solid foundation in Indian auditing with our expertly prepare Audit
          MCQ quizzes prepared to test and increase your knowledge of India’s
          Auditing System.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Ace Your Auditing Exams with Our Latest IPCC-Aligned Audit MCQ
          Quizzes!
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Get ahead of the curve and stay ahead in the race with our expertly
          designed Audit MCQ quizzes that covers topics that have been in the
          news in the past year and are raised in every commerce stream
          competitive examinations. Designed to match the latest syllabus of the
          IPCC, our Audit MCQ quizzes provide an in-depth assessment of your
          auditing knowledge. With an extensive library of questions covering
          all major topics of IPCC Audit Syllabus, you'll be able to identify
          areas for improvement in your IPCC Audit syllabus preparation and
          ensure your success in the upcoming audit exam of IPCC. Don't wait,
          start practicing now with our IPCC-aligned Audit MCQ quizzes and stay
          ahead of the competition!
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Audit IPCC MCQs with Answers
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Get ready to ace your IPCC exams with our comprehensive Audit IPCC MCQ
          Quizzes! Designed by experts in the field, our Audit IPCC MCQ Quizzes
          are an effective way to test your knowledge and enhance your
          understanding of Auditing, especially the one that is done in India
          and asked in our exams. With a vast library of multiple-choice
          questions (sometimes raised providing real-life scenarios) and instant
          detailed answers, you'll be able to identify areas for improvement and
          track your progress with our Audit IPCC MCQ Quizzes. Say goodbye to
          the stress of Audit IPCC syllabus and say hello to confident and
          successful results. Start practicing now with our Audit IPCC MCQ
          Quizzes!
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Improve Your Auditing Knowledge with Our Company Audit MCQ Quizzes
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Boost your auditing skills and ace your exams with our comprehensive
          Company Audit MCQs! Our platform offers a unique and effective way to
          test your knowledge and prepare for success. With a vast library of
          multiple-choice questions, detailed answers, and real-life scenarios,
          you'll be able to identify areas for improvement, track your progress,
          and develop a thorough understanding of the subject matter. Whether
          you're a student, a professional, or just looking to enhance your
          skills, our Company Audit MCQs are the perfect solution. Don't wait,
          start practicing now and secure your future!
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{ paddingBottom: 3, paddingTop: 6 }}
        >
          Prepare for Success with Our Comprehensive Internal Audit Quizzes
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ textAlign: "justify" }}
        >
          Maximize your success and conquer your internal audit exams with ease!
          Our Internal Audit Quizzes offer an extensive library of questions
          covering all major topics, including questions from the last ten years
          of competitive exams. With detailed answers and immediate and detailed
          solutions, you'll be able to identify areas for improvement in your
          preparation of internal audit syllabus, and build a thorough
          understanding of the subject matter. Whether you're a student, a
          professional, or just looking to enhance your knowledge of the A-Z of
          India’s Internal Audit System, our Internal Audit MCQ Quizzes are the
          perfect solution. Don't wait, start practicing our Internal Audit MCQs
          now and secure your future!
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
            data-topic="Audit"
            data-id="4"
            onClick={handleClick}
          >
            <img
              src="/static/icons/audit.svg"
              alt="Audit Icon"
              width={40}
              height={40}
            />
            <Typography variant="body1" component="div" sx={{ paddingLeft: 1 }}>
              Start Game
            </Typography>
          </Button>
        </Box>
      </Box>
      <DialogBox open={showModal} handleClose={() => setShowModal(false)}>
        <Instruction
          topic="Audit"
          handleClose={() => setShowModal(false)}
          subjectId={4}
          handleSound={handleSound}
        />
      </DialogBox>
    </Layout>
  );
}
