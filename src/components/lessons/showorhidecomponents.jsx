import React, { useState } from "react";

const TitleComp = (props) => {
  return <h1>{props.title}</h1>;
};

const ShowAndHide = () => {
  const [title, setTitle] = useState("Chikaodi");
  const [isShowing, setIsShowing] = useState(true);

  const handleShow = () => {
    setIsShowing(true);
  };

  const handleHide = () => {
    setIsShowing(false);
  };

  return (
    <>
      {isShowing && <TitleComp title={title} />}
      <button onClick={handleShow}>Show</button>
      <button onClick={handleHide}>Hide</button>
    </>
  );
};

export { ShowAndHide };
