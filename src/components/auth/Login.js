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
        marginBottom: "1rem",
        width: "80%",
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

function Login() {
    const classes = useStyles();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const history = useHistory();

    // const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            login(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/");
        } catch (error) {
            // setError(true);
            console.log(error)
        }
    }
    return (
        <Container className={classes.root}>
            <h1 className={classes.heading}>Log In</h1>
            {/* //error */}
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.field}>
                    <label>Email</label>
                    <input ref={emailRef} type="text" required/>
                </div>
                <div className={classes.field}>
                    <label>Password</label>
                    <input ref={passwordRef} type="text" required/>
                </div>
                <input type="submit" disabled={loading} />
            </form>
            <p className={classes.link}>Lost it again? <Link to="/forget-password">Forget Password</Link></p>
            <p className={classes.link}>Visiting for the first time? <Link to="/signup">SignUp</Link></p>
        </Container>
    );
}

export default Login;
