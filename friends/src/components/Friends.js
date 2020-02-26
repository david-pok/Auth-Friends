import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, []);

  if (friends.length === 0) {
    return <h1>Loading Friends...</h1>;
  }

  return (
    <>
      {friends.length === 0 ? (
        <h1>Loading Friends...</h1>
      ) : (
        <>
          <h1>FRIENDS!</h1>
          {friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))}
          <AddFriend />{" "}
        </>
      )}
    </>
  );
}
