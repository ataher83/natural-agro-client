import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null); 

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const [reload, setReload] = useState(false); 



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password); 
    }
    
    const updateUserProfile = (name, image) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          }) 
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    



    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const loggedInUser = result.user;
            setUser(loggedInUser);
          })
          .catch((error) => {
            console.log('error', error.message)
          });
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
        .then((result) => {
            const loggedInUser = result.user;
            setUser(loggedInUser);
          })
          .catch((error) => {
            console.log('error', error.message)
          });
    }




    const logOut = () => {
        setLoading(true)
        return signOut(auth); 
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe(); 
        }
    // }, [])
    }, [reload])


    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        setReload,
        signIn,
        googleSignIn,
        githubSignIn,
        logOut,

        setUser
        // regError,
        // success
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;