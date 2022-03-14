import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function DialogBox({ open, handleClose, children }) {
  const classes = useStyles();

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => setIsBrowser(true), []);

  const modalContent = (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modalBody}
      // BackdropProps={{ style: { backgroundColor: "white" } }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </Modal>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

const useStyles = makeStyles({
  modalBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    width: "80%",
    height: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    boxShadow: 24,
    // padding: "60px 140px 28px",
    borderRadius: 16,
    "&:focus-visible ": {
      outline: "none",
    },
  },
});
