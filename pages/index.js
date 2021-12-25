import QuizSection from "@/components/quizSection";
import styles from "@/styles/QuizSection.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <div className={styles.background}>
      <Box xs={{ p: 2 }}>
        <Typography
          variant="body1"
          component="div"
          align="center"
          color="primary"
        >
          Personality Survey Quiz
        </Typography>
      </Box>
      <QuizSection />
    </div>
  );
}
