import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "@/styles/QuizSection.module.css";
import Button from "@mui/material/Button";
import { useTransition, animated } from "react-spring";
import Typography from "@mui/material/Typography";

export default function QuizSection(props) {
  const { question, options } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (e) => {
    const selected = e.target.getAttribute("data-option");
    if (selected) {
      setSelectedOption(selected);
    }
  };

  return (
    <Box className={styles.quizSection}>
      <Typography
        className={styles.question}
        variant="h5"
        component="div"
        align="center"
      >
        We can update the state in React.js by calling to setState() method.
        These calls are:{" "}
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
        onClick={handleSelect}
      >
        <Grid item md={6}>
          <div
            className={
              selectedOption === "a"
                ? `${styles.option} ${styles.selected}`
                : styles.option
            }
            data-option="a"
          >
            A. Synchronous in nature.
          </div>
        </Grid>

        <Grid item md={6}>
          <div
            className={
              selectedOption === "b"
                ? `${styles.option} ${styles.selected}`
                : styles.option
            }
            data-option="b"
          >
            B. Asynchronous in nature.
          </div>
        </Grid>

        <Grid item md={6}>
          <div
            className={
              selectedOption === "c"
                ? `${styles.option} ${styles.selected}`
                : styles.option
            }
            data-option="c"
          >
            C. Are asynchronous but can be made synchronous when required.
          </div>
        </Grid>

        <Grid item md={6}>
          <div
            className={
              selectedOption === "d"
                ? `${styles.option} ${styles.selected}`
                : styles.option
            }
            data-option="d"
          >
            D. None of the above.
          </div>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
