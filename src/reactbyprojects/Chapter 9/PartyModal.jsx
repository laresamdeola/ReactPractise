import React, { useState, useEffect } from "react";

const PartyModal = ({message}) => {
    var text = "";
    if(message === "New Guest Added"){
        text = "Hello Guest";
    }
    console.log(text);
    return (
        <h1>Party Modal</h1>
    );
}

export { PartyModal };