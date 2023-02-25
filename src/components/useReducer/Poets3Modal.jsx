import React, { useEffect } from "react";

const Poets3Modal = ({poet3ModalContents, closePoets3Modal}) => {
    useEffect(() => {
        setTimeout(() => {
            closePoets3Modal();
        }, 1000)
    });
    
    return <h1>{poet3ModalContents}</h1>
}

export default Poets3Modal;

