import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import NoteList from "../notesList/NotesList";
import styles from "./index.module.scss";

const NoteSection = () => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleSearch = (e) => {
    dispatch({ type: "ON_SEARCH_NOTE", payload: e.target.value });
  };

  return (
    <div className={styles.NoteSection}>
      <div className={styles.title}>
        <h2>Le tue note</h2>
        <input
          onInput={onHandleSearch}
          type="text"
          id="search"
          name="search"
          placeholder="Cerca..."
        />
      </div>
      
      <NoteList />
    </div>
  );
};

export default NoteSection;