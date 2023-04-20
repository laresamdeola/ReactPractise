import React, { useState, useEffect } from "react";

const PartyModal = ({isModalOpen}) => {
    return (
        <h1>{isModalOpen && console.log("Hello World!")}k</h1>
    );
}

export { PartyModal };