import React, { useRef } from 'react';
import { login } from "../Auth";
import { Link, useHistory } from "react-router-dom";
import {Button, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "600px",
  },
  heading: {
    marginTop: "5vh",
    fontSize: "2rem",
    textAlign: "center",
  },
  form: {
    marginTop: "5vh",
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

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(emailRef.current.value, passwordRef.current.value);
    history.push("/")
  }

  return (
  <>
    <Container className={classes.root}>
      <div>
        <p className={classes.heading}>Reset Password</p>
        <p>Enter your email, we'll help you to reset your password.</p>
        <div>
          <form onSubmit={handleSubmit} className={classes.form}>
            <input className={classes.input} placeholder="Email" type="email" ref={emailRef} required />
            <Button className={classes.btn} type="submit">Reset Password</Button>
            <Link className={classes.link} to="/login">Login</Link>
          </form>
          <p className={classes.link} >Don't have an account? <Link className={classes.link} to="signup">Sign Up</Link></p>
        </div>
      </div>
    </Container>
  </>
  )
}
