import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import ReactDOM from "react-dom";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox({
  open,
  handleClose,
  fullScreen = false,
  children,
}) {
  const classes = useStyles();

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => setIsBrowser(true), []);

  const modalContent = (
    <Dialog
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      TransitionComponent={Transition}
      maxWidth="md"
      fullScreen={fullScreen}
    >
      {children}
    </Dialog>
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
  modal: {
    "& .MuiDialog-paper": {
      borderRadius: 16,
    },
  },
});
