import { useModal } from "../customhooks/useModal";

const ReduceModal2 = ({ modalContents2 }) => {
  const reduceModal = useModal(modalContents2, 3000);

  return <>{reduceModal}</>;
};

export default ReduceModal2;
