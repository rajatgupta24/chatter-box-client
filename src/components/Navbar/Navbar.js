import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const { loginWithPopup, logout, isAuthenticated, user} = useAuth0();

    return (
        <nav>
            {
                isAuthenticated ? (
                    <div >
                        <button onClick={() => logout()}>Log out</button>
                    </div>
                ) : (
                    <div>
                        <h1>Chatter Box</h1>
                        <button onClick={() => loginWithPopup()}>Log In</button>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar;
