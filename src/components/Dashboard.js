import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Container from '@material-ui/core/Container';

function Dashboard() {
    const history = useHistory();
    const { currentUser, logout } = useAuth();

    const clickHandler = () => {
        logout();
        history.push("/login");
    }

    return (
        <Container>
            <div style={{background: "#efefef"}}>
                <h1>Hello, World!!!</h1>
                <p>{currentUser && JSON.stringify(currentUser)}</p>
                <Link to="/update-profile">Update Profile</Link>
                <button onClick={clickHandler}>Log out</button>
            </div>
        </Container>
    )
}

export default Dashboard;
