import React, { useState } from "react";
import { Link } from "react-router-dom";

function Auth () {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div>
        <h1>Join</h1>
        <div>
          <input placeholder="username" className="" type="text" onChange={(e) => setName(e.target.value)} />
          <input placeholder="roomname" className="" type="text" onChange={(e) => setRoom(e.target.value)} />
        </div>
        <Link onClick={ e => (!name || !room ) && e.preventDefault() } to={`/chat?name=${name}&room=${room}`}>
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Auth;
