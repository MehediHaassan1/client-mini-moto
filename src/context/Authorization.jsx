import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";

const auth = getAuth(app);

export const UserContext = createContext(null);

const Authorization = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user);

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    const updateUserProfileInfo = (name, photo, phone) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo || "",
            phoneNumber: phone || "",
        })
            .then(() => {})
            .catch((error) => {});
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            return unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        signUpUser,
        signInUser,
        signOutUser,
        updateUserProfileInfo,
    };
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export default Authorization;