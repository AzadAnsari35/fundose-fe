import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import Layout from "@/components/Layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { createTheme } from "@mui/material/styles";
import api from "@/api/index";
import { useDispatch } from "react-redux";
import * as types from "@/actions/types";

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

const defaultTheme = createTheme();

export default function Profile({ handleSound }) {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      // dispatch({
      //   type: types.START_LOADER,
      // });
      const res = await api("/players/profile/");
      setData(res);
      // dispatch({
      //   type: types.STOP_LOADER,
      // });
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch({
      //   type: types.STOP_LOADER,
      // });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Layout handleSound={handleSound}>
      <div className={classes.container}>
        {data && (
          <Box
            className={classes.card}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <div className={classes.info}>
              <img
                src="/static/images/profile.png"
                alt="Profile Image"
                width={100}
                height={100}
                className={classes.avatar}
              />

              <Box sx={{ pl: 3 }}>
                <Typography variant="h5" component="div" color="#333333">
                  {`${data?.first_name} ${data?.last_name}`}
                </Typography>

                <Typography variant="body1" component="div" color="#666666">
                  {data?.email}
                </Typography>
              </Box>
            </div>
            <div className={classes.stats}>
              {/* <div className={classes.rank}>
              <img
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
            </div> */}
              <div className={classes.points}>
                <img
                  src="/static/icons/point.svg"
                  alt="Reward Icon"
                  width={30}
                  height={30}
                />
                <Box sx={{ pl: 1 }}>
                  <Typography variant="body2" component="div">
                    {data?.total_score} Points
                  </Typography>
                  <Typography variant="body2" component="div" color="#666666">
                    Points Earned
                  </Typography>
                </Box>
              </div>
            </div>
          </Box>
        )}
        {/* <Box className={classes.card}>
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
                    sx={{ pr: { sm: 7, xs: 1 }, fontWeight: 800 }}
                  >
                    {rank}
                  </Typography>
                  <img
                    src={ProfileImg}
                    alt="Profile Image"
                    width={40}
                    height={40}
                    className={classes.avatar}
                  />
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ pl: { sm: 5, xs: 1 }, fontWeight: 800 }}
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
        </Box> */}
      </div>
    </Layout>
  );
}

const useStyles = makeStyles(() => {
  const onMobile = defaultTheme.breakpoints.only("xs");

  return createStyles({
    container: {
      paddingTop: 100,
      width: "60%",
      margin: "0 auto",
      [onMobile]: {
        width: "100%",
        paddingTop: 0,
      },
    },
    card: {
      padding: "28px 36px",
      background: "#FFFFFF",
      borderRadius: 25,
      marginTop: 24,
      [onMobile]: {
        display: "block",
        padding: "12px 20px 24px",
      },
    },

    info: {
      display: "flex",
      alignItems: "center",
      [onMobile]: {
        paddingBottom: 20,
      },
    },

    avatar: {
      borderRadius: "50%",
      border: "1px solid #7386FF",
    },

    stats: {
      display: "flex",
      justifyContent: "center",
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
      [onMobile]: {
        padding: "8px 12px",
      },
    },

    active: {
      backgroundColor: "#2E45D5",
      color: "#F1F1F1",
    },
  });
});
