import React from "react";
import { makeStyles } from "@mui/styles";
import Layout from "@/components/Layout";
import Typography from "@mui/material/Typography";
import RewardIcon from "../public/icons/reward.svg";
import PointIcon from "../public/icons/point.svg";
import ProfileImg from "../public/images/profile.png";
import Box from "@mui/material/Box";
import Image from "next/image";

const rankingArray = [
  {
    rank: "1st",
    name: "Azad Ansari",
    score: 23322,
  },
  {
    rank: "2nd",
    name: "Azad Ansari",
    score: 23322,
  },
  {
    rank: "3rd",
    name: "Azad Ansari",
    score: 23322,
  },
  {
    rank: "4th",
    name: "Azad Ansari",
    score: 23322,
  },
  {
    rank: "5th",
    name: "Azad Ansari",
    score: 23322,
    isActive: true,
  },
];

export default function Profile() {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.container}>
        <Box
          className={classes.card}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <div className={classes.info}>
            <Image
              src={ProfileImg}
              alt="Profile Image"
              width={100}
              height={100}
              className={classes.avatar}
            />

            <Box sx={{ pl: 3 }}>
              <Typography variant="h5" component="div" color="#333333">
                Mosh hamedani
              </Typography>

              <Typography variant="body1" component="div" color="#666666">
                Male 23 Year’s
              </Typography>
            </Box>
          </div>
          <div className={classes.stats}>
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
          </div>
        </Box>
        <Box className={classes.card}>
          <Typography variant="h5" component="div" color="#2E45D5">
            Global Ranking
          </Typography>

          <Box sx={{ pt: 4 }}>
            {rankingArray.map(({ rank, name, score, isActive }) => (
              <div
                className={`${classes.rankingCard} ${
                  isActive ? classes.active : ""
                }`}
                key={rank}
              >
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ pr: 7, fontWeight: 800 }}
                  >
                    {rank}
                  </Typography>
                  <Image
                    src={ProfileImg}
                    alt="Profile Image"
                    width={40}
                    height={40}
                    className={classes.avatar}
                  />
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ pl: 5, fontWeight: 800 }}
                  >
                    {name}
                  </Typography>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Typography
                    variant="body2"
                    component="div"
                    color="#FDB108"
                    sx={{ fontWeight: 800 }}
                  >
                    {score}
                  </Typography>
                  <Typography variant="body2" component="div">
                    Scored
                  </Typography>
                </Box>
              </div>
            ))}
          </Box>
        </Box>
      </div>
    </Layout>
  );
}

const useStyles = makeStyles({
  container: {
    paddingTop: 100,
    width: "60%",
    margin: "0 auto",
  },
  card: {
    padding: "28px 36px",
    background: "#FFFFFF",
    borderRadius: 25,
    marginTop: 24,
  },

  info: {
    display: "flex",
    alignItems: "center",
  },

  avatar: {
    borderRadius: "50%",
    border: "1px solid #7386FF",
  },

  stats: {
    display: "flex",
  },

  rank: {
    display: "flex",
    paddingRight: 8,
    borderRight: "1px solid #e4e3e3",
  },

  points: {
    display: "flex",
    paddingLeft: 8,
  },

  rankingCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
    padding: "8px 36px",
    marginBottom: 8,
    color: "#333333",
  },

  active: {
    backgroundColor: "#2E45D5",
    color: "#F1F1F1",
  },
});
