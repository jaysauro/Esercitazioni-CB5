import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Post from "../post";
import "./index.css";

const PostsList = () => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setMsgList(posts));
  }, []);

  return (
    <div className="PostsList">
      {msgList.map((msg) => (
        <Post data={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default PostsList;