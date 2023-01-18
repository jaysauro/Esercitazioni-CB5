import { useState } from "react";
import NewPost from "../newPost";
import Modal from "../modal/Modal";
import Button from "../button";
import "./index.css";

const CommandBar = () => {
  const [isModalEnabled, setModalEnabled] = useState(false);
  const onHandleModal = () => setModalEnabled((prev) => !prev);

  return (
    <div>
      {isModalEnabled && (
        <Modal>
          <NewPost/>
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