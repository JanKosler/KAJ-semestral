import { auth } from './firebase-config';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

/**
 * Creates a new user with the provided email and password
 *
 * @param {string} email  The email of the user
 * @param {string} password  The password of the user
 * @returns {Promise<UserCredential>}  The user credential
 * @throws {Error}  If the email is invalid or the password is less than 6 characters
 */
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Signs in the user with the provided email and password
 *
 * @param {string} email  The email of the user
 * @param {string} password  The password of the user
 * @returns {Promise<UserCredential>}  The user credential
 */
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Signs out the current user
 *
 * @returns {Promise<void>}
 */
export const doSignOut = () => {
  return auth.signOut();
};
