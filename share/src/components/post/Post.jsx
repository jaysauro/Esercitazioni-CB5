import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const Post = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="Post">
      <div className="Post__header">
        <img src={user.image} alt={user.firstName} />
        <p className="name">{user.firstName}</p>
      </div>
      <div className="Post__text">
        <h4>{data.title}</h4>
        <p>{data.body}</p>
      </div>
      <div className="Post__buttons">
        <button>💚</button>
        <button>💬</button>
        <button>🌍</button>
      </div>
    </div>
  );
};

export default Post;

