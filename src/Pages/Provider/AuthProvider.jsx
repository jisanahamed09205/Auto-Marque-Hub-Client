import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const update = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            // console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,createUser,logOut,login,loading,signInWithGoogle,update
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;