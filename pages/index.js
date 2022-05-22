import Home from "@/components/Home";
import QuizSection from "@/components/QuizSection";
import Layout from "@/components/Layout";
import { useSelector } from "react-redux";

export default function HomePage() {
  const isGamePlaying = useSelector((state) => state.quiz.isGamePlaying);

  return <Layout>{isGamePlaying ? <QuizSection /> : <Home />}</Layout>;
}
