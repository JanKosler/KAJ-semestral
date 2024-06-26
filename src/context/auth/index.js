import React, { useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase-config';

const AuthContext = React.createContext();

/**
 * useAuth
 * @returns context with auth
 */
export function useAuth() {
  return useContext(AuthContext);
}

/**
 * AuthProvider
 * @param {*} children
 * @returns
 */
export function AuthProvider({ children }) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // state changes - that is, when the user logs in or logs out.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user signed in');
        setUserLoggedIn(true);
        setCurrentUser({ ...user });
      } else {
        console.log('user logged out');
        setCurrentUser(null);
        setUserLoggedIn(false);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Effect for updating local storage with the current user ID
  useEffect(() => {
    if (currentUser) {
      // Save user ID to local storage
      localStorage.setItem('userId', currentUser.uid);
    } else {
      // Clear user ID from local storage on logout
      localStorage.removeItem('userId');
    }
  }, [currentUser]); // Dependency on currentUser ensures this runs when user logs in/out

  const value = {
    userLoggedIn,
    currentUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
