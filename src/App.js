import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";


import Chat from "./Components/Chat/Chat";
import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/Signup/SignUp";
import ForgetPassword from "./Components/Auth/ForgetPassword/ForgetPassword";

function App() {
  return (
    <>
      <Router>
        <PrivateRoute exact path="/" component={Chat} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/forget-password" component={ForgetPassword} />
      </Router>
    </>
  );
}

export default App;
