import React, { useEffect } from "react";

const Poets4Modal = ({poets4ModalContents, closeModal4}) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal4();
        }, 1000)
    });
    
    return <h4>{poets4ModalContents}</h4>
}

export default Poets4Modal;