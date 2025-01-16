import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosSecurePublic from "../Hooks/useAxiosSecurePublic";


// import useAxiosSecurePublic from "../Hooks/useAxiosSecurePublic";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const Provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosSecurePublic();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(loading, user)
    const crateNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // const ForgotPassword  = (email) => {
    //     return sendPasswordResetEmail(auth, email)
    // };
    const Logout = () => {
        setLoading(true);
        return signOut(auth)

    };
    const continueToGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, Provider)
    };

    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const UpdateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                //get token and store client
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
            }
            else{
                //To do :remove token
                localStorage.removeItem('access-token')
                setLoading(false)
            }

        })
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])
  
    const AutInfo = {
        user,
        // setUser,
        crateNewUser,
        Logout,
        SignIn,
        continueToGoogle,
        loading,
        UpdateUserProfile,
        // ForgotPassword
    }

    return (
        <AuthContext.Provider value={AutInfo} >
            {children}
            {/* <ToastContainer></ToastContainer> */}
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