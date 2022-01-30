import React from "react";
import Layout from "@/components/Layout";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import RewardIcon from "../public/icons/reward.svg";
import PointIcon from "../public/icons/point.svg";
import QuestionIcon from "../public/icons/question.svg";
import WinnerIcon from "../public/icons/winner.svg";
import WrongIcon from "../public/icons/wrong.svg";
import CorrectIcon from "../public/icons/correct.svg";
import PlayedIcon from "../public/icons/played.svg";
import Box from "@mui/material/Box";
import Image from "next/image";

export default function Statistics() {
  const classes = useStyles();

  const statsArray = [
    {
      icon: QuestionIcon,
      label: "Question Answered",
      count: 88,
    },
    {
      icon: CorrectIcon,
      label: "Correct Answered",
      count: 3,
    },
    {
      icon: WrongIcon,
      label: "Wrong Answered",
      count: 22,
    },
    {
      icon: PlayedIcon,
      label: "Game Played",
      count: 34,
    },
    {
      icon: WinnerIcon,
      label: "Game Win",
      count: 7,
    },
  ];

  return (
    <Layout>
      <Box sx={{ pt: 15 }}>
        <div className={classes.card}>
          <Typography variant="h5" component="div" color="#2E45D5">
            Statistics
          </Typography>
          <Typography variant="body2" component="div">
            All over Performance
          </Typography>
          <div>Income Tax</div>

          <Box
            display="flex"
            justifyContent="space-between"
            position="relative"
            sx={{ pt: 3, pb: 5 }}
          >
            <div className={classes.rank}>
              <Image
                src={RewardIcon}
                alt="Reward Icon"
                width={30}
                height={30}
              />
              <Box sx={{ pl: 1 }}>
                <Typography variant="body2" component="div">
                  5th Rank
                </Typography>
                <Typography variant="body2" component="div" color="#666666">
                  My Ranking
                </Typography>
              </Box>
            </div>
            <div className={classes.points}>
              <Image src={PointIcon} alt="Reward Icon" width={30} height={30} />
              <Box sx={{ pl: 1 }}>
                <Typography variant="body2" component="div">
                  434 Points
                </Typography>
                <Typography variant="body2" component="div" color="#666666">
                  Points Earned
                </Typography>
              </Box>
            </div>
          </Box>

          {statsArray.map(({ icon, label, count }, i) => (
            <div className={classes.statsRow} key={i}>
              <Box display="flex" alignItems="center">
                <Image
                  src={icon}
                  alt="Question Mark Icon"
                  width={30}
                  height={30}
                  className={classes.avatar}
                />
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ pl: 2, fontWeight: 800 }}
                >
                  {label}
                </Typography>
              </Box>

              <Box display="flex" flexDirection="column">
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ fontWeight: 800 }}
                  color="#333333"
                >
                  {count}
                </Typography>
              </Box>
            </div>
          ))}
        </div>
      </Box>
    </Layout>
  );
}

const useStyles = makeStyles({
  card: {
    padding: "28px 36px",
    background: "#FFFFFF",
    borderRadius: 25,
    width: "60%",
    margin: "0 auto",
  },
  rank: {
    display: "flex",
    paddingRight: 8,
    "&:after": {
      content: '""',
      backgroundColor: "#e4e3e3",
      position: "absolute",
      width: 1,
      height: 30,
      top: 25,
      left: "50%",
      display: "block",
    },
  },

  points: {
    display: "flex",
    paddingLeft: 8,
  },

  statsRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    marginBottom: 20,
    color: "#666666",
  },
});
