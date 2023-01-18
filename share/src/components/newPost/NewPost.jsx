import { useState, useEffect } from "react";
import { POST } from "../../utils/http";
import "./index.css";

const NewPost = () => {
  const personalName = "Jaysauro";
  const personalPic = "./personalLogo.png";

  const [titleText, setTitleText] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messagePost, setMessagePost] = useState({});
  
  const onHandleTitleText = (e) => setTitleText(e.target.value);
  const onHandleMessageText = (e) => setMessageText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      userId: 9,
      image: personalPic,
      firstName: personalName,
      title: titleText,
      body: messageText,
    });

  };

  useEffect(() => {
    if (messagePost.personalName && messagePost.title)
      POST("posts/add", messagePost);
  }, [messagePost]);

  return (
    <div className="NewPost">
      <div className="headerNewPost">
        <img className='personalLogo' src='./personalLogo.png' alt='personalLogo'></img>
        <h2>Create Post</h2>
      </div>
      <form className="createNewPost" onSubmit={onSubmit}>
        <div className="textSection">
          <input
            className="titleNewPost"
            value={titleText}
            onChange={onHandleTitleText}
            type="text"
            placeholder="Title..."
            required>
          </input>
          <input 
            className="messageNewPost"
            value={messageText}
            onChange={onHandleMessageText}
            type="text"
            placeholder="What do you want to ShAre?"
            required>
          </input>
        </div>
        <div className="btnSection">
          <input type="file"></input>
          <input type="submit"/>
        </div>
      </form>
    </div>
  );
};

export default NewPost;