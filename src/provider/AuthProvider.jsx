import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem('dark')) || false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    // Login user with email & password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Signin
    const googleSignin = () => signInWithPopup(auth, googleAuth);

    // Create new user with email & password
    const createNewUser = (email, password, name, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const updateFields = { displayName: name, photoURL };
                updateProfile(auth.currentUser, updateFields)
                    .then(() => {
                        setUser({ ...auth.currentUser, ...updateFields });
                    })
            })

    }

    // Logout function
    const logOut = () => signOut(auth);

    return (<AuthContext.Provider value={{ user, loginUser, createNewUser, logOut, googleSignin, setDark }}>
        <div className={dark ? "dark" : ''}>
            {!loading && children}
        </div>
    </AuthContext.Provider>);
};

AuthProvider.propTypes = {
    children: PropTypes.array
}

export default AuthProvider;