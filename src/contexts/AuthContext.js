import React, { useContext, useState } from 'react';
import auth from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
} 

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      setCurrentUser(userCredential.user);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const value = {
    currentUser,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
