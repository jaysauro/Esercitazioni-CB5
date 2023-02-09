import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const NoteItem = ({ data }) => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleClick = () => {
    dispatch({ type: "ON_DELETE_NOTE", payload: data.id });
  };

  return (
    <div className={styles.NoteItem}>
      <div className={styles.noteText}>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
      </div>
      <button onClick={onHandleClick}>🚮</button>
    </div>
  );
};

export default NoteItem;