import { useEffect, useState, useContext, createContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user))
        return unsubscribe
    }, [])

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const forgetPassword = (email) => {
        auth.sendPasswordResetEmail(email);
    }

    const logout = () => {
        auth.signOut()
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        forgetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
