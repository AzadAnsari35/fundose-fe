import React, { useState, createContext, useContext } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { hideModal } from "@/actions/common.act";
import { useDispatch, useSelector } from "react-redux";
import DialogBox from "./Modal";

export const MODAL_TYPES = {
  SIGNUP_FORM: "SIGNUP_FORM",
  LOGIN_FORM: "LOGIN_FORM",
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.SIGNUP_FORM]: SignUpForm,
  [MODAL_TYPES.LOGIN_FORM]: LoginForm,
};

const GlobalModalProvider = () => {
  const dispatch = useDispatch();
  const { isModalOpen, modalType } = useSelector((state) => state.common);

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    return <ModalComponent id={modalType} />;
  };

  return (
    <DialogBox open={isModalOpen} handleClose={() => dispatch(hideModal())}>
      {renderComponent()}
    </DialogBox>
  );
};

export default GlobalModalProvider;
