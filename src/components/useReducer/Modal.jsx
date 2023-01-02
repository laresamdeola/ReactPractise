import React, { useState, useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
      setTimeout(() => {
          closeModal();
      }, 3000)
  })
    return <h2>{modalContent}</h2>;
};

export default Modal;
