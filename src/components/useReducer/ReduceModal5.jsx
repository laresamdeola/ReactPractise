import React, { useEffect } from "react";
import { useModal } from "../customhooks/useModal";

const ReduceModal5 = ({ modalContents }) => {
  return <>{useModal(modalContents, 1000)}</>;
};

export default ReduceModal5;
