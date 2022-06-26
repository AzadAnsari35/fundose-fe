import Instruction from "@/components/Instruction";
import DialogBox from "@/components/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import AuditIcon from "../public/icons/audit.svg";
//Icons
import FinanceIcon from "../public/icons/finance.svg";
import GstIcon from "../public/icons/gst.svg";
import ItIcon from "../public/icons/it.svg";

const defaultTheme = createTheme();

function Home() {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [topic, setTopic] = useState("");

  const handleClick = (e) => {
    const selectedTopic = e.currentTarget.getAttribute("data-topic");
    if (selectedTopic) {
      setShowModal(true);
      setTopic(selectedTopic);
    }
  };

  const containerVariants = {
    hidden: { y: -250 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 10,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Box className={classes.home}>
        <motion.div
          className={classes.leftContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography variant="h4" sx={{ pb: 1 }} component={motion.div}>
            FUN DOSE
          </Typography>
          <Typography variant="h2" sx={{ pb: 3 }} component={motion.div}>
            <b>QUIZ</b>
          </Typography>
          <Typography variant="body1" component={motion.div}>
            This Accounting Test is designed to help you assess your knowledge
            of essential accounting principles and basic concepts
          </Typography>
        </motion.div>

        <motion.div
          className={classes.rightContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography variant="subtitle1" component="div">
            Select Topic
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ lineHeight: "24px" }}
          >
            Select any topic from below and improve you skill and grab the prize
          </Typography>

          <Grid container spacing={2} className={classes.topics}>
            <Grid item xs={6} component={motion.div} variants={item}>
              <div
                className={classes.topic}
                data-topic="Finance"
                onClick={handleClick}
              >
                <Image
                  src={FinanceIcon}
                  alt="Finance Icon"
                  width={40}
                  height={40}
                />
                <Typography variant="body1" component="div">
                  Finance
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} component={motion.div} variants={item}>
              <div
                className={classes.topic}
                data-topic="Income Tax"
                onClick={handleClick}
              >
                <Image
                  src={ItIcon}
                  alt="Income tax Icon"
                  width={40}
                  height={40}
                />
                <Typography variant="body1" component="div">
                  Income Tax
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} component={motion.div} variants={item}>
              <div
                className={classes.topic}
                data-topic="Audit"
                onClick={handleClick}
              >
                <Image
                  src={AuditIcon}
                  alt="Audit Icon"
                  width={40}
                  height={40}
                />
                <Typography variant="body1" component="div">
                  Audit
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} component={motion.div} variants={item}>
              <div
                className={classes.topic}
                data-topic="GST"
                onClick={handleClick}
              >
                <Image src={GstIcon} alt="Gst Icon" width={40} height={40} />
                <Typography variant="body1" component="div">
                  GST
                </Typography>
              </div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
      <DialogBox open={showModal} handleClose={() => setShowModal(false)}>
        <Instruction topic={topic} handleClose={() => setShowModal(false)} />
      </DialogBox>
    </>
  );
}

export default Home;

const useStyles = makeStyles(() => {
  const onMobile = defaultTheme.breakpoints.only("xs");

  return createStyles({
    home: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 60px - 50px)",
      color: "#f1f1f1",
      paddingTop: 40,
      [onMobile]: {
        display: "block",
      },
    },

    leftContainer: {
      width: "30%",
      marginRight: 120,
      [onMobile]: {
        width: "100%",
        textAlign: "center",
        "& > :last-child": {
          display: "none",
        },
      },
    },

    rightContainer: {
      width: "22%",
      [onMobile]: {
        width: "100%",
      },
    },

    topics: {
      marginTop: 20,
    },

    topic: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#7386ff",
      boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.1)",
      borderRadius: 8,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#7386ff",
      },
      "& div": {
        paddingTop: 8,
      },
    },
  });
});
