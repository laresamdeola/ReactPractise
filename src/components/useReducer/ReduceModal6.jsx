import React from "react";
import { useModal } from "../customhooks/useModal";

const ReduceModal6 = ({ modalContents }) => {
  return <div>{useModal(modalContents, 1000)}</div>;
};

export default ReduceModal6;
