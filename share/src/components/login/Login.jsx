import { useState, useRef } from "react";
import users from "../../utils/users";
import "./index.css";

const LogIn = () => {
  const showPass = useRef(null);
  const [loginState, setLoginState] = useState({});

  const onFormSubmit = () => {
    if (users) {
      users.map((user) => {
        if (
          user.username === loginState.username &&
          user.password === loginState.password
        ) {
          localStorage.setItem(
            "username",
            JSON.stringify({ ...loginState, imgProfile: user.imgProfile })
          );
        }
      });
    }
  };

  const onShowPass = () => {
    if (showPass.current.type === "text") {
      showPass.current.setAttribute("type", "password");
    } else {
      showPass.current.setAttribute("type", "text");
    }
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={loginState.username}
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, username: e.target.value }))
          }
          placeholder="Nome utente"
        />
        <input
          type="password"
          value={loginState.password}
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Password"
          ref={showPass}
        />
        <button onClick={onShowPass}>
        </button>
        <input className="accessInput" type="submit" value="Accedi" />
      </form>
      <h3>A safe space for her, them, <br/> US.</h3>
    </div>
  );
};

export default LogIn;