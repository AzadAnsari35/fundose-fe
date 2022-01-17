import Instruction from "@/components/Instruction";
import Layout from "@/components/Layout";
import DialogBox from "@/components/Modal";
import styles from "@/styles/Home.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import AuditIcon from "../public/icons/audit.svg";
//Icons
import FinanceIcon from "../public/icons/finance.svg";
import GstIcon from "../public/icons/gst.svg";
import ItIcon from "../public/icons/it.svg";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [topic, setTopic] = useState("");

  const handleClick = (e) => {
    // dispatch(fetchQuestion(0));
    // router.push("/quiz");
    const selectedTopic = e.currentTarget.getAttribute("data-topic");
    if (selectedTopic) {
      setShowModal(true);
      setTopic(selectedTopic);
    }
  };

  return (
    <>
      <Layout>
        <Box className={styles.home}>
          <div className={styles.leftContainer}>
            <Typography variant="h4" component="div" sx={{ pb: 1 }}>
              FUN DOSE
            </Typography>
            <Typography variant="h2" component="div" sx={{ pb: 3 }}>
              <b>QUIZ</b>
            </Typography>
            <Typography variant="body1" component="div">
              This Accounting Test is designed to help you assess your knowledge
              of essential accounting principles and basic concepts
            </Typography>
          </div>

          <div className={styles.rightContainer}>
            <Typography variant="subtitle1" component="div">
              Select Topic
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ lineHeight: "24px" }}
            >
              Select any topic from below and improve you skill and grab the
              prize
            </Typography>

            <Grid container spacing={2} className={styles.topics}>
              <Grid item xs={6}>
                <div
                  className={styles.topic}
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
              <Grid item xs={6}>
                <div
                  className={styles.topic}
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
              <Grid item xs={6}>
                <div
                  className={styles.topic}
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
              <Grid item xs={6}>
                <div
                  className={styles.topic}
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
          </div>
        </Box>
      </Layout>
      <DialogBox open={showModal} handleClose={() => setShowModal(false)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Instruction topic={topic} />
        </Box>
      </DialogBox>
    </>
  );
}
