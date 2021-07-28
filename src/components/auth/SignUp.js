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

export default function SignUp() {
    const classes = useStyles();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const history = useHistory();

    // const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value){
            console.log("errror");
            // setError(true);
            return;
        }

        try {
            setLoading(true);
            signup(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/");
        } catch (error) {
            // setError(true);
            console.log(error)
        }
    }

    return (
        <Container className={classes.root}>
            <h1 className={classes.heading}>Sign Up</h1>
            {/* // error */}
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.field}>
                    <label>Email</label>
                    <input ref={emailRef} type="text" required/>
                </div>
                <div className={classes.field}>
                    <label>Password</label>
                    <input ref={passwordRef} type="text" required/>
                </div>
                <div className={classes.field}>
                    <label>Confrm Password</label>
                    <input ref={confirmPasswordRef} type="text" required/>
                </div>                        
                <input type="submit" disabled={loading}/>
            </form>
            <p>Have been here before? <Link to="/login">LogIn</Link></p>
        </Container>
    )
}
