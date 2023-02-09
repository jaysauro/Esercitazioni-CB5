import styles from "./App.module.scss";
import Navbar from "./components/navbar/Navbar";
import AddNote from "./components/addNote";
import NoteSection from "./components/noteSection";

import { ApplicationCtx } from "./store";
import { useReducer } from "react";
import { initialState } from "./store";
import { globalReducer } from "./store/reducer";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
            <Navbar />
            <div className={styles.main}>
              <AddNote />
              <NoteSection />
            </div>
      </ApplicationCtx.Provider>
    </div>
  );
}

export default App;
