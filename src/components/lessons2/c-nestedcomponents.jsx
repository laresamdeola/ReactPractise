import React from "react";

const Biography = () => {
  // Introduction
  // Early Life
  // Life
  // Honours
  // Bibliography

  let title = "Obafemi Awolowo";

  const Structure = (content, functionName) => {
    return (
      <div>
        <h2>{functionName.name}</h2>
        <p>{content}</p>
      </div>
    );
  };

  const Introduction = () => {
    let introText = "This is the Introduction Part.";
    return Structure(introText, Introduction);
  };

  const EarlyLife = () => {
    let earlyLifeText = "This is the Early Life Section.";
    return Structure(earlyLifeText, EarlyLife);
  };

  const Life = () => {
    let lifeText = "This is the Life section.";
    return Structure(lifeText, Life);
  };

  const Honours = () => {
    let honoursText = "This is the Honours section.";
    return Structure(honoursText, Honours);
  };

  const Bibliography = () => {
    let bibliographyText = "This is the Bibliography section.";
    return Structure(bibliographyText, Bibliography);
  };

  return (
    <>
      <h1>{title}</h1>
      <Introduction />
      <EarlyLife />
      <Life />
      <Honours />
      <Bibliography />
    </>
  );
};

export { Biography };
