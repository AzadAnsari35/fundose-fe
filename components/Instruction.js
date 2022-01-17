import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import InstructionIcon from "../public/illustration/instruction.svg";
import Box from "@mui/material/Box";
import { fetchQuestion } from "@/actions/quiz.act";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function Instruction({ topic }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const startQuiz = () => {
    dispatch(fetchQuestion(0));
    router.push("/quiz");
  };

  return (
    <>
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
      >
        <li>There are total 12 questions</li>
        <li>You have 60 Sec for each question</li>
        <li>You have to complete all the questions</li>
        <li>If you give wrong answer game will be stop there</li>
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
        <Button variant="contained" sx={{ mt: 3 }} onClick={startQuiz}>
          Start Quiz
        </Button>
      </Box>
    </>
  );
}
