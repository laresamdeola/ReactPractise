import React from "react";

const Contact = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.phoneNumber}</h3>
      <h3>{props.address}</h3>
    </div>
  );
};

const ContactList = () => {
  return (
    <>
      <Contact
        name="Sholape Ogunjobi"
        phoneNumber="1233445"
        address="Adeshiyan Street"
      />
    </>
  );
};

export { ContactList };
