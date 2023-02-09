import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const AddNote = () => {
  const { dispatch } = useContext(ApplicationCtx);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_NOTE",
      payload: {
        id: Math.floor(Math.random() * 1000),
        title,
        content,
      },
    });
    setTitle(() => "");
    setContent(() => "");
  };

  return (
    <div className={styles.AddNote}>
      <h2>Aggiungi nota</h2>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
          placeholder="Title.."
          required
        />
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
          placeholder="Note.."
          required
        />
        <div className={styles.button}>
          <input type="submit" value="Add note" />
        </div>
      </form>
    </div>
  );
};

export default AddNote;