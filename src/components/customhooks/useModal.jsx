import React, { useState, useEffect } from "react";

const useModal = (text, time) => {
  const [modal, setModal] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, time);
    setModal(true);
  }, [text, time]);
  return <h3>{modal ? text : ""}</h3>;
};

export { useModal };
