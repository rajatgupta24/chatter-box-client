import React from 'react';
import { Redirect, Route } from 'react-router';

import { auth } from "./firebase";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={
      props => auth.currentUser
      ? (<Component {...props} />) 
      : (<Redirect to={{pathname: "/"}}/>)
    }/>
  )
}

export default PrivateRoute;
