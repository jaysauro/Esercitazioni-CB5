import { useState } from "react";
import "./index.css";

const NewPost = () => {
  const [messageText, setMessageText] = useState("");

  const onHandleInput = (e) => setMessageText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(messageText);
  };

  return (
    <div className="NewPost">
      <form onSubmit={onSubmit}>
        <input
          value={messageText}
          onChange={onHandleInput}
          type="text"
          placeholder="Create new post"
        />
        <input type="submit" value="+" />
      </form>
    </div>
  );
};

export default NewPost;