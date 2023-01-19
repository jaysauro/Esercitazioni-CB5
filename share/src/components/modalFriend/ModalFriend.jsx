import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const ModalFriend = ({ friendId }) => {
  const [friendData, setFriendData] = useState({});

  useEffect(() => {
    GET(`users/${friendId}`).then((friend) => setFriendData(friend));
  }, []);

  const { image, username, firstName, lastName, address } = friendData;
  console.log(friendId);

  return (
    <div className="ModalFriend">
        <img src={image} alt={username} />
        <h3>{`${firstName} ${lastName}`}</h3>
        <p>{`${address?.city} ${address?.state}`}</p>
        <h5>{username}</h5>
    </div>
  );
};

export default ModalFriend;