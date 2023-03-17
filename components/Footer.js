import { makeStyles, createStyles } from "@mui/styles";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function Footer() {
  const classes = useStyles();
  const today = new Date();

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
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
          <Link href="sitemap.xml">
            <a>Sitemap</a>
          </Link>
        </div>
        <div className={classes.icons}>
          <a
            href="https://www.linkedin.com/in/ca-tushar-makkar-190b76b7/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/tushar_makkar29/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/@catusharmakkar"
            target="_blank"
            rel="noreferrer noopener"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
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

const useStyles = makeStyles(() => {
  const onMobile = defaultTheme.breakpoints.only("xs");

  return createStyles({
    root: {
      background: "#7386FF",
      borderRadius: "20px 20px 0px 0px",
      color: "white",
      padding: "24px 300px 12px",
      marginTop: "-20px",
      [onMobile]: {
        padding: "35px 30px 20px",
      },
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      [onMobile]: {
        flexDirection: "column",
      },
    },
    links: {
      display: "flex",
      "& > a": {
        padding: "0px 20px",
      },
      [onMobile]: {
        flexDirection: "column",
        "& > a": {
          padding: "8px 0px",
        },
      },
    },
    icons: {
      display: "flex",
      "& > a": {
        padding: "0px 8px",
      },
      [onMobile]: {
        paddingTop: 20,
        "& > a": {
          padding: "0px 10px 0px 0px",
        },
      },
    },
  });
});
