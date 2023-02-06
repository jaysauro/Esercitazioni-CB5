import Counter from "./components/counter";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>COUNTER WITH REDUCER</h1>
      <Counter/>
    </div>
  )
}

export default App
