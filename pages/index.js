import Home from "@/components/Home";
import QuizSection from "@/components/QuizSection";
import Layout from "@/components/Layout";

import { useSelector } from "react-redux";

export default function HomePage({ handleSound }) {
  const isGamePlaying = useSelector((state) => state.quiz.isGamePlaying);

  return (
    <Layout handleSound={handleSound}>
      {isGamePlaying ? (
        <QuizSection handleSound={handleSound} />
      ) : (
        <Home handleSound={handleSound} />
      )}
    </Layout>
  );
}
