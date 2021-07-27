import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { useAuth } from "../../contexts/AuthContext";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const history = useHistory();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            login(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/");
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

                <div>
                    <label>Password</label>
                    <input ref={passwordRef} type="text"/>
                </div>

                <input type="submit" disabled={loading}/>
            </form>
            <Link to="/forget-password">Forget Password</Link>
            <Link to="/signup">SignUp</Link>
        </Container>
    );
}

export default Login;
