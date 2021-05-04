import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Chat from "./Components/Chat/Chat";


function App() {
  return (
    <Router>
      <Route path="/" exact component={Auth} />
      <Route path="/chat" component={Chat} />
    </Router>   
  );
}

export default App;
