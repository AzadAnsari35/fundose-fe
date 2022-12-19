import Layout from "@/components/Layout";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

const defaultTheme = createTheme();
const onMobile = defaultTheme.breakpoints.only("xs");

export default function Statistics() {
  const classes = useStyles();

  const statsArray = [
    {
      icon: "/icons/question.svg",
      label: "Question Answered",
      count: 88,
    },
    {
      icon: "/icons/correct.svg",
      label: "Correct Answered",
      count: 3,
    },
    {
      icon: "/icons/wrong.svg",
      label: "Wrong Answered",
      count: 22,
    },
    {
      icon: "/icons/played.svg",
      label: "Game Played",
      count: 34,
    },
    {
      icon: "/icons/winner.svg",
      label: "Game Win",
      count: 7,
    },
  ];

  return (
    <Layout>
      <Box sx={{ pt: { sm: 15, xs: 0 } }}>
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
                src="/icons/reward.svg"
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
              <Image
                src="/icons/point.svg"
                alt="Reward Icon"
                width={30}
                height={30}
              />
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
    [onMobile]: {
      width: "100%",
    },
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
