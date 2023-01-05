import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";

const backgroundimg = "/static/icons/border.svg";

// Create styles
const styles = {
  root: {
    backgroundColor: "#FEF5EA",
    width: 1145,
    height: 810,
    padding: 28,
  },
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${backgroundimg})`,
    padding: 60,
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
  },
  title: {
    fontFamily: "Cardo",
    fontSize: 54,
    color: "#6D4737",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Cardo",
    fontSize: 26,
    color: "#6D4737",
  },
  titleTop: {
    width: 500,
    height: 50,
    paddingBottom: 12,
  },
  titleBottom: {
    width: 500,
    height: 40,
    paddingTop: 12,
  },
  name: {
    fontFamily: "Roboto",
    fontSize: 40,
    color: "#363736",
    paddingTop: 54,
    paddingBottom: 20,
    textTransform: "capitalize",
  },
  para: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#6D4737",
    textAlign: "center",
    paddingBottom: 26,
  },
  winner: {
    fontFamily: "Roboto",
    fontSize: 22,
    color: "#6D4737",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 1145,
    padding: "80px 200px",
    marginRight: 55,
  },
  sign: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  date: {
    fontFamily: "Pinyon Script",
    fontSize: 22,
  },
};

// Create Document Component
export default function MyDocument() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const questionObj = useSelector((state) => state.quiz.question);

  return (
    <div style={styles.root}>
      <div style={styles.page}>
        <img
          src="/static/icons/titleTop.svg"
          style={styles.titleTop}
          alt="top border"
        />
        <div style={styles.title}>
          <span>Certificate</span>
        </div>
        <div style={styles.subtitle}>
          <span>OF ACHIEVEMENT</span>
        </div>
        <img
          src="/static/icons/titleBottom.svg"
          style={styles.titleBottom}
          alt="bottom border"
        />
        <div style={styles.name}>
          <span>
            {currentUser?.first_name} {currentUser?.last_name}
          </span>
        </div>
        <div style={styles.para}>
          <span>
            has successfully completed the online quiz competition <br />
            on the topic &quot;{questionObj?.subject?.name}&quot; organized by
            Fundose
            <br />
          </span>
        </div>
        <div style={styles.winner}>
          <span>“Winner of Fundoze quiz competition”</span>
        </div>
        <div style={styles.footer}>
          <div style={styles.sign}>
            <img src="/static/images/sign.png" />
            <span>CA Tushar Makkar</span>
          </div>
          <div>
            <img src="/static/icons/seal.svg" />
          </div>
          <div style={styles.sign}>
            <span>{new Date().toString().slice(4, 15)}</span>
            <span>Date Issued</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Certificate() {
  const printRef = useRef(null);

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, {
      width: 1145,
      height: 810,
    });

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  return (
    <div>
      <button className="button" onClick={handleDownloadImage}>
        Generate PDF
      </button>
      <div ref={printRef}>
        <MyDocument />
      </div>
    </div>
  );
}
