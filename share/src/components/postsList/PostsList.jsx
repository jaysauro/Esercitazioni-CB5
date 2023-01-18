import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Post from "../post";
import "./index.css";

const PostsList = ({nPost, filterSearch}) => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) =>
      nPost === "full"
        ? setMsgList(posts.filter((post) => post.title.includes(filterSearch)))
        : setMsgList(posts.filter((post) => post.id <= nPost))
    );
  }, [filterSearch]);

  return (
    <div className="PostsList">
      {msgList.map((msg) => (
        <Post data={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default PostsList;