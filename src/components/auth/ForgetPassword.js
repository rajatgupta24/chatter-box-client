import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        marginBottom: "1rem",
        padding: "2rem",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "1rem",
        boxShadow: "0px 0px 3px #999"
    },
    field: {
        width: "80%",
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "column"
    },
    heading: {
        fontSize: "3rem",
        fontWeight: "400",
        color: "#777",
    },
    link: {
        margin: ".25rem",
    }
});

function ForgetPassword() {
    const classes = useStyles();
    const emailRef = useRef();
    const { forgetPassword } = useAuth();
    const history = useHistory();

    // const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            forgetPassword(emailRef.current.value);
            setLoading(false);
            history.push("/login");
        } catch (error) {
            // setError(true);
            console.log(error)
        }
    }
    return (
        <Container className={classes.root}>
            <h1 className={classes.heading}>Reset Password</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.field}>
                    <label>Email</label>
                    <input ref={emailRef} type="text"/>
                </div>
                <input type="submit" disabled={loading}/>
            </form>
            <p className={classes.link}>Make sure you keep it save this time, or else we'll see you again. <Link to="/login">Log In</Link></p>
        </Container>
    );
}

export default ForgetPassword;
