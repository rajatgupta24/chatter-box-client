import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/Signup/SignUp";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <>
      <Router>
        <PrivateRoute exact path="/" component={Chat} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Router>
    </>
  );
}

export default App;
