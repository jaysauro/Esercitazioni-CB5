import Modal from "../modal/Modal";
import NewPost from "../newPost";
import ModalFriend from "../modalFriend/ModalFriend";
import Button from "../button";
import "./index.css";

const CommandBar = ({setModalEnabled, setModalContent, isModalEnabled, modalContent}) => {

  const onHandleModal = () => {
    setModalEnabled((prev) => !prev);
    setModalContent("NewMessage");
  };

  return (
    <div>
      {isModalEnabled && (
          <Modal setModalEnabled={setModalEnabled}>
            {modalContent === "NewMessage" ? (
              <NewPost setModalEnabled={setModalEnabled} />
            ) : (
              <ModalFriend friendId={modalContent} />
            )}
          </Modal>
        )}
    <div className="CommandBar">
      <button>⏏</button>
      <button>🔍</button>
      <Button className="addBtn" isModalEnabled={isModalEnabled} func={onHandleModal}>+</Button>
      <button>✉</button>
      <button className="btnLogo"></button>
    </div>
    </div>
  )
};

export default CommandBar;