import QuizSection from "@/components/quizSection";
import Layout from "@/components/Layout";
import withPrivateRoute from "@/components/withPrivateRoute";

function Quiz() {
  return (
    <Layout>
      <QuizSection />
    </Layout>
  );
}

export default withPrivateRoute(Quiz);
