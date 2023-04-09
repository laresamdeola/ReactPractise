import React from "react";

let name = "";
let message = "";

const Components = () => {
  const Headline = () => {
    name = "Lare";
    return <h1>This {name}, welcome to my profile page.</h1>;
  };

  const Intro = () => {
    message = "This is all about my career";
    return <p>{message}</p>;
  };

  return (
    <div>
      <Headline />
      <Intro />
    </div>
  );
};

export default Components;
