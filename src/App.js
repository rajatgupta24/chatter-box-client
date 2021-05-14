import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignUp from "./Components/Auth/Signup/SignUp";
import Chat from "./Components/Chat/Chat";
import { AuthProvider } from "./contexts/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Route path="/signup" exact component={SignUp} />
      </Router>
    </AuthProvider>
  );
}

export default App;
