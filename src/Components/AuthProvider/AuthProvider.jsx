import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true);
    console.log(user)

    // create user 
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in user / login user 
    const signInUser =(email, password,name)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password,name)
    }

    // google login 
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }

    // github login 
    const githubLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // logOut 
    const logOut = ()=>{
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }
   

    // observer here 
    // useEffect(()=>{
    //     const a=  onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //         setUser(user)
    //         setLoading(false)
    //         }
    //       });
    
    // },[])

// ইউজার ওয়েবসাইট রিলোড দিলে লগিন অবস্থায় থাকবে নিচের কোড টি ব্যবহার করলে।
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current value of the user :", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    



    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
