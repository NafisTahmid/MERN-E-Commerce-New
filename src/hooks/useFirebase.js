import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider,  getAuth,  signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { set } from "react-hook-form";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user); 
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });

    }

    const signInWithGithub = () => {

        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });

    }

    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });

    }

    // return (
    //     <div>
            
    //     </div>
    // );

    const registerUser = (name, image, email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            userUpdate(name, image);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });

    }

    const userUpdate = (name, image) => {

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          }).then(() => {
          
          }).catch((error) => {
            setError(error.message);
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            //   const uid = user.uid;
              setUser(user);
            } else {
                setUser({});
            }
          });

    }, [auth])

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
          }).catch((error) => {
            // An error happened.
          });
    }

    return {
        user,
        error,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        registerUser,
        login,
        logOut
    };
};

export default useFirebase;