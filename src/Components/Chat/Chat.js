import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";

let socket;

function Chat ({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io.connect(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log(socket);
  }, [location.search, ENDPOINT])

  return (
    <div>
      Chat
    </div>
  )
}

export default Chat;
