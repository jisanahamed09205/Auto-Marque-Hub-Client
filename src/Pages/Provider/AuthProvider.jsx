import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const createUser = (name,email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password,name)
    }

    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,createUser,logOut,login
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;