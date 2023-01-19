import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend";
import "./index.css";

const FriendsList = ({setModalContent, setModalEnabled}) => {
  const [friendsList, setFriendsList] = useState([]);
  console.log(setModalContent);

  useEffect(() => {
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendsList">
      {friendsList.map((friend) => (
        <Friend 
          data={friend} 
          setModalContent={setModalContent}
          setModalEnabled={setModalEnabled}
          key={friend.id} 
          />
      ))}
    </div>
  );
};

export default FriendsList;