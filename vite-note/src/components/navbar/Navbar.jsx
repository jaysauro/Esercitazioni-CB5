import Login from "../login/Login";
import styles from "./index.module.scss";

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <h1>Block Notes</h1>
            <Login/>
        </div>
    )
}

export default Navbar;
