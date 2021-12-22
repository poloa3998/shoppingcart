import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase/firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = (props) => {
  const getUserNames = async (username) => {
    const mySnapshot = await getDocs(collection(db, "users"));
    mySnapshot.forEach((doc) => {
      if (username === doc.data().username) {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data().username);
      }
    });
  };
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: username,
      });
      setDoc(doc(db, "users", auth.currentUser.uid), {
        cart: [],
      });
    });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    getUserNames();
  };

  const logout = () => {
    auth.signOut();
    window.location.reload();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    login,
    signup,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};
