import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const history = useHistory();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value){
            console.log("errror");
            setError(true);
            return;
        }

        try {
            setLoading(true);
            signup(emailRef.current.value, passwordRef.current.value);
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

                <div>
                    <label>Confrm PassWord</label>
                    <input ref={confirmPasswordRef} type="text"/>
                </div>        
                
                <input type="submit" disabled={loading}/>
            </form>

            <Link to="/login">LogIn</Link>
        </Container>
    )
}
