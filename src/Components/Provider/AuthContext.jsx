import { createContext, useEffect, useState } from "react";
import { Auth } from "../../firebase/Auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth/cordova";

export const AuthProvider = createContext();
export default function AuthContext({ children }) {
  const [user, SetUser] = useState(null);
  const [loading, setLoadin] = useState(true);
  console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const logOut = () => {
    signOut(Auth);
  };
  const profileUpdata = (updateData) => {
    return updateProfile(Auth.currentUser, updateData);
  };
  useEffect(() => {
    const objervation = onAuthStateChanged(Auth, (currentUser) => {
      SetUser(currentUser);
      setLoadin(false);
    });
    return () => {
      objervation();
    };
  }, []);
  const authDataShare = {
    user,
    SetUser,
    profileUpdata,
    createUser,
    loginUser,
    logOut,
    loading,
  };

  return (
    <AuthProvider.Provider value={authDataShare}>
      {children}
    </AuthProvider.Provider>
  );
}
