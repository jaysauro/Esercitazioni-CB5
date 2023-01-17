import NewPost from "../newPost";
import "./index.css";

const CommandBar = () => {
  return (
    <div className="CommandBar">
      <button>⏏</button>
      <button>🔍</button>
      <button className="addBtn">+</button>
      <button>✉</button>
      <button className="btnLogo"></button>
    </div>
    
  )
};

export default CommandBar;