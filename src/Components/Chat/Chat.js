import React, { useState, useEffect } from "react";

import io from "socket.io-client";
import queryString from "query-string";
import { logout } from "../Auth/Auth";
import { auth } from "../../firebase";
import { useHistory } from "react-router";


function Chat ({ location }) {
  const history = useHistory();
  // const [name, setName] = useState("");
  // const [room, setRoom] = useState("");

  // const ENDPOINT = 'localhost:5000';

  // useEffect(() => {
  //   const { name, room } = queryString.parse(location.search);

  //   socket = io.connect(ENDPOINT);

  //   setName(name);
  //   setRoom(room);

  //   console.log(socket);
  // }, [location.search, ENDPOINT])

  console.log(auth);

  const handleClick = () => {
    logout();
    history.push("/login");
  }

  return (
    <div>
      <p>{auth.currentUser.email}</p>
      <button onClick={handleClick}>Sign Out</button>
    </div>
  )
}

export default Chat;
