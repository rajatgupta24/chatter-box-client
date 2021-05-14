import React, { useRef, useState } from 'react';
import { useAuth } from "../../../contexts/AuthContext";


export default function SignUp() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handle")

    if (passwordRef.current.value !== confirmPasswordRef.current.value) return setError ("Passwords don't match");

    try{
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError ("Wrong happens");
    }
    setLoading(false);
  }

  console.log("sign");

  return (
  <>
    <div>
      <div>
        <h2>Sign Up</h2>
        {error && error}
        {currentUser && currentUser.email}
        <form onSubmit={handleSubmit}>
          <input placeholder="email" type="email" ref={emailRef} required />
          <input placeholder="password" type="password" ref={passwordRef} required />
          <input placeholder="confirm Password" type="password" ref={confirmPasswordRef} required />
          <button disabled={loading} type="submit">Sign In</button>
        </form>
        <p>Already have an account? Log In</p>
      </div>
    </div>
  </>
  )
}
