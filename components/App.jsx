import React, { useState } from "react";

const title = "Advanced React";

const styles = {
  color: "red"
};

const App = () => {
  const [text, setText] = useState("Random Title");

  const handleText = () => {
    if (text === "Random Title") {
      setText("New Title");
    } else {
      setText("Random Title");
    }
  };

  return (
    <div>
      <h1 style={styles}>{title}</h1>
      <h3>{text}</h3>
      <button onClick={handleText}>Change Text</button>
    </div>
  );
};

export default App;
