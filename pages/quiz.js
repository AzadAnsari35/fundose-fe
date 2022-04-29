import QuizSection from "@/components/QuizSection";
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
