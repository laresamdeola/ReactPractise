import React, { useState } from "react";

const name = "Chika";

const Component1 = ({ setMessage, message }) => {
  setMessage("I love you");
  return <h2>{message}</h2>;
};

const Component2 = ({ setMessage, message }) => {
  setMessage("I cherish you");
  return <h2>{message}</h2>;
};

const MultipleReturns = () => {
  const [message, setMessage] = useState("");
  return (
    <>
      <div>
        {name === "Chikam" ? (
          <Component1 setMessage={setMessage} message={message} />
        ) : (
          <Component2 setMessage={setMessage} message={message} />
        )}
      </div>
    </>
  );
};

export { MultipleReturns };
