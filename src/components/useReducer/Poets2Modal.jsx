import React, { useEffect } from "react";

const Poets2Modal = ({poets2ModalContents, closePoet2Modal}) => {
    
    useEffect(() => {
        setTimeout(() => {
            closePoet2Modal();
        }, 3000)
    })
    return <h2>{poets2ModalContents}</h2>
}

export default Poets2Modal;