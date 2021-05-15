import React, { useRef } from 'react';
import { signup } from "../Auth";
import { useHistory } from "react-router"

export default function SignUp() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) return;
    await signup(emailRef.current.value, passwordRef.current.value);
    history.push("/")
  }

  return (
  <>
    <div>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="email" type="email" ref={emailRef} required />
          <input placeholder="password" type="password" ref={passwordRef} required />
          <input placeholder="confirm Password" type="password" ref={confirmPasswordRef} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? Log In</p>
      </div>
    </div>
  </>
  )
}
