import { useModal } from "./useModal";

const ModalExample = () => {
    const modal = useModal("Hi Damilare", 2000);
    
    return (
        <>
            {modal}
        </>
    )
}

export default ModalExample;