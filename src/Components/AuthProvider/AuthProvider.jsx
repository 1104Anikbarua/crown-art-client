import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
export const DrawingContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(null)

    const googleProvider = new GoogleAuthProvider();

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const verifyLogin = (email, password) => {
        setLoading(true)
        const userInfo = {
            email,
            password,
            returnSecureToken: true
        }
        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCtrwc_hxqD-zlCwR-KQcSDm2ekftG_67Y', userInfo)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [refresh])
    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // const resetPassword = (email) => {
    //     return sendPasswordResetEmail(auth, email)
    // }

    const authInfo = {
        signUpUser,
        verifyLogin,
        logInUser,
        updateUser,
        logOutUser,
        googleSignUp,
        // resetPassword,
        user,
        loading,
        setRefresh,
    }
    return (
        <DrawingContext.Provider value={authInfo}>
            {children}
        </DrawingContext.Provider>
    );
};

export default AuthProvider;