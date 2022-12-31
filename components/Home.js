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
const AuditIcon = "/static/icons/audit.svg";
//Icons

const defaultTheme = createTheme();

function Home({ handleSound }) {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [topic, setTopic] = useState("");
  const [subjectId, setSubjectId] = useState("");

  const handleClick = (e) => {
    handleSound("button");
    const selectedTopic = e.currentTarget.getAttribute("data-topic");
    const selectedId = e.currentTarget.getAttribute("data-id");
    if (selectedTopic) {
      setShowModal(true);
      setTopic(selectedTopic);
      setSubjectId(+selectedId);
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
            Welcome to
          </Typography>
          <Typography variant="h2" sx={{ pb: 3 }} component={motion.div}>
            <b>FUNDOSE QUIZ</b>
          </Typography>
          <Typography variant="body1" component={motion.div}>
            This test is designed to reveal your hidden academic potential and
            business talent. This is the front page
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
            Select a topic from below and experience the thrill of winning
            prizes
          </Typography>

          <Grid container spacing={2} className={classes.topics}>
            <Grid item xs={6} component={motion.div} variants={item}>
              <div
                className={classes.topic}
                data-topic="Finance"
                data-id="3"
                onClick={handleClick}
              >
                <img
                  src="/static/icons/finance.svg"
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
                data-id="1"
                onClick={handleClick}
              >
                <img
                  src="/static/icons/it.svg"
                  alt="Income Tax Icon"
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
                data-id="4"
                onClick={handleClick}
              >
                <img
                  src="/static/icons/audit.svg"
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
                data-id="2"
                onClick={handleClick}
              >
                <img
                  src="/static/icons/gst.svg"
                  alt="Gst Icon"
                  width={40}
                  height={40}
                />
                <Typography variant="body1" component="div">
                  GST
                </Typography>
              </div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
      <DialogBox open={showModal} handleClose={() => setShowModal(false)}>
        <Instruction
          topic={topic}
          handleClose={() => setShowModal(false)}
          subjectId={subjectId}
          handleSound={handleSound}
        />
      </DialogBox>
    </>
  );
}

export default Home;

const useStyles = makeStyles(() => {
  const onMobile = defaultTheme.breakpoints.only("xs");
  const onTab = defaultTheme.breakpoints.down(1025);

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
      [onTab]: {
        width: "32%",
      },
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
