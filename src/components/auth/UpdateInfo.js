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

function UpdateInfo() {
    const classes = useStyles();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
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

        setLoading(true);
        try {
            if (passwordRef.current.value && emailRef.current.value !== currentUser.email) {
                updateEmail(emailRef.current.value);
                updatePassword(passwordRef.current.value);
            } else if (passwordRef.current.value || emailRef.current.value === currentUser.email) {
                updatePassword(passwordRef.current.value);
            } else if (!passwordRef.current.value || emailRef.current.value === currentUser.email) {
                updateEmail(emailRef.current.value);
            }
            history.push("/");
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setError(error);
        }

    }
    return (
        <Container className={classes.root}>
            <h1 className={classes.heading}>Update Info</h1>
            {/* //error
            //msg */}
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.field}>
                    <label>Email</label>
                    <input ref={emailRef} type="text" defaultValue={currentUser && currentUser.email} />
                </div>
                <div className={classes.field}>
                    <label>Password</label>
                    <input ref={passwordRef} type="text" placeholder="Leave empty to keep the previous one"/>
                </div>
                <div className={classes.field}>
                    <label>Comfirm Password</label>
                    <input ref={confirmPasswordRef} type="text" placeholder="Leave empty to keep the previous one"/>
                </div>
                <input type="submit" disabled={loading} />
            </form>
            <p className={classes.link}>Don't want to mess, go back <Link to="/">Cancel</Link></p>
        </Container>
    );
}

export default UpdateInfo;
