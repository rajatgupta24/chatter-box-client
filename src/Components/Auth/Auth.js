import { useState } from "react";
import { auth } from "../../firebase";

export function signup(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
    return user;
  })
  .catch((error) => {
    console.log(error)
  });
}

export function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
  .then((user) => {
    return user;
  })
  .catch((error) => {
    console.log(error)
  });
}

export function logout() {
  auth.signOut();
}

auth.onAuthStateChanged(function(user) {
  if (user) {

  } else {

  }
});