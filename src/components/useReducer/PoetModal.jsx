import React, { useEffect } from "react";

const PoetModal = ({poetModalContent, closePoetModal}) => {
    
    useEffect(() => {
        setTimeout(() => {
            closePoetModal();
        }, 5000)
    });
    
    return <h3>{poetModalContent}</h3>
}

export default PoetModal;