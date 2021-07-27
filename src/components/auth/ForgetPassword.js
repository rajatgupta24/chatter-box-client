import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { useAuth } from "../../contexts/AuthContext";

function ForgetPassword() {
    const emailRef = useRef();
    const { forgetPassword } = useAuth();
    const history = useHistory();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            forgetPassword(emailRef.current.value);
            setLoading(false);
            history.push("/login");
        } catch (error) {
            setError(true);
            console.log(error)
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input ref={emailRef} type="text"/>
                </div>

                <input type="submit" disabled={loading}/>
            </form>
            <Link to="/login">Log In</Link>
        </Container>
    );
}

export default ForgetPassword;
