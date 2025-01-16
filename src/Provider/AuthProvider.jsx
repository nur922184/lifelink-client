import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosSecurePublic from "../Hooks/useAxiosSecurePublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const Provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosSecurePublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const crateNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const Logout = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            navigate("/"); // লগআউট করার পর হোম পেজে রিডাইরেক্ট
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            setLoading(false);
        }
    };

    const continueToGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, Provider);
    };

    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const UpdateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // JWT টোকেন তৈরি এবং সংরক্ষণ
                const userInfo = { email: currentUser.email };
                try {
                    const res = await axiosPublic.post("/jwt", userInfo);
                    if (res.data.token) {
                        localStorage.setItem("access-token", res.data.token);
                    }
                } catch (error) {
                    console.error("Failed to fetch token:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                // লগআউট হলে টোকেন সরানো
                localStorage.removeItem("access-token");
                setLoading(false);
            }
        });
        return () => {
            unSubscribe();
        };
    }, [axiosPublic]);

    const AutInfo = {
        user,
        crateNewUser,
        Logout,
        SignIn,
        continueToGoogle,
        loading,
        UpdateUserProfile,
        setLoading
    };

    return (
        <AuthContext.Provider value={AutInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;





// useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, currentUser => {
//         setUser(currentUser)
//         setLoading(false)
//     })
//     return () => {
//         unSubscribe();
//     }
// }, [])