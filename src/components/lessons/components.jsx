import React from "react";
import { FirstName, SurName } from "./nestedComponent";

const Components = () => {
  const firstName = "Chikaodi";
  const surName = "Biere";
  return (
    <div>
      <FirstName firstName={firstName} />
      <SurName surName={surName} />
    </div>
  );
};

export { Components };
