import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import React from "react";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(loading, user);

//   create user 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   login option 
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

//   Google login
  const loginWithGoogle =()=>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider);
  }

//   update profile option 
  const updateUserProfile=(updatedUser)=>{
    return updateProfile(auth.currentUser, updatedUser)
  }

//   forget password
const forgetPassword=(email)=>{
    return sendPasswordResetEmail(auth, email);
}

//   logout option
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    userLogin,
    loading,
    setLoading,
    updateUserProfile,
    loginWithGoogle,
    forgetPassword,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
