import QuizSection from "@/components/QuizSection";
import Layout from "@/components/Layout";
import withPrivateRoute from "@/components/withPrivateRoute";

function Quiz({ handleSound }) {
  return (
    <Layout handleSound={handleSound}>
      <QuizSection />
    </Layout>
  );
}

export default withPrivateRoute(Quiz);
