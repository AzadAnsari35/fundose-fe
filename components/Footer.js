import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const classes = useStyles();
  const today = new Date();

  return (
    <footer className={classes.root}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div className={classes.links}>
          <Link href="audit-quiz-trivia-mcq-test-question-answers">
            <a>Audit</a>
          </Link>
          <Link href="finance-quiz-trivia-mcq-test-question-answers">
            <a>Finance</a>
          </Link>
          <Link href="gst-quiz-trivia-mcq-test-question-answers">
            <a>GST</a>
          </Link>
          <Link href="income-tax-quiz-trivia-mcq-test-question-answers">
            <a>Income Tax</a>
          </Link>
        </div>
        <div className={classes.icons}>
          <a
            href="https://www.linkedin.com/company/fundose/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon />
          </a>
          <a href="" target="_blank" rel="noreferrer noopener">
            <FacebookIcon />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <YouTubeIcon />
          </a>
        </div>
      </Box>
      <Typography
        variant="body2"
        component="div"
        sx={{
          lineHeight: "24px",
          display: "flex",
          justifyContent: "center",
          paddingTop: 2,
        }}
      >
        Copyright Ⓒ {today.getFullYear()} Fundose. All Rights Reserved.
      </Typography>
    </footer>
  );
}

const useStyles = makeStyles({
  root: {
    background: "#7386FF",
    borderRadius: "20px 20px 0px 0px",
    color: "white",
    padding: "24px 300px 12px",
    marginTop: "-20px",
  },
  links: {
    display: "flex",
    "& > a": {
      padding: "0px 20px",
    },
  },
  icons: {
    display: "flex",
    "& > a": {
      padding: "0px 8px",
    },
  },
});
