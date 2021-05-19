import React, { useRef } from 'react';
import { signup } from "../Auth";
import { Link, useHistory } from "react-router-dom";
import {Button, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "600px",
  },
  heading: {
    fontSize: "2.5rem",
    textAlign: "center",
  },
  form: {
    marginTop: "10vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: ".5rem",
    padding: ".35rem .75rem",
    width: "90%",
    fontSize: "1rem",
    border: "none",
    boxShadow: "0px 0px 3px 3px #ddd"
  },
  link: {
    margin: ".5rem 0",
    textDecoration: "none",
    textAlign: "center",
  },
  btn: {
    margin: ".65rem",
    width: "90%",
    padding: ".35rem .75rem",
    background: "#0075CE",
    color: "#f4f4f4",
  }
}));

export default function SignUp() {
  const classes = useStyles();
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
    <Container className={classes.root}>
      <div>
        <h1 className={classes.heading}>Chatter Box</h1>
        <form  className={classes.form} onSubmit={handleSubmit}>
          <input className={classes.input} placeholder="Email" type="email" ref={emailRef} required />
          <input className={classes.input} placeholder="Password" type="password" ref={passwordRef} required />
          <input className={classes.input} placeholder="Confirm Password" type="password" ref={confirmPasswordRef} required />
          <Button className={classes.btn} type="submit">Sign Up</Button>
        </form>
        <p className={classes.link} >Already have an account? <Link className={classes.link} to="login">Log In</Link></p>
      </div>
    </Container>
  </>
  )
}
