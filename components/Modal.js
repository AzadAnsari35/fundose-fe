import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import ReactDOM from "react-dom";
import styles from "@/styles/Modal.module.css";

export default function DialogBox({ open, handleClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true), []);

  const modalContent = (
    <Modal
      open={open}
      onClose={handleClose}
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
