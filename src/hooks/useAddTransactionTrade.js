import { useState } from 'react';
import { db } from '../config/firebase-config';
import { doc, getDoc, setDoc, addDoc, collection, deleteDoc, query, getDocs } from 'firebase/firestore';

export function useHoldings() {
  const [error, setError] = useState(null);

  /**
   * Retrieves the user document or creates one if it does not exist
   * @param {string} userId  The user ID
   * @returns  The user document reference
   */
  const retrieveOrCreateUser = (userId) => {
    const userRef = doc(db, 'users', userId);
    return getDoc(userRef).then((docSnap) => {
      if (!docSnap.exists()) {
        return setDoc(userRef, {}).then(() => {
          console.log('User document created!');
          return userRef;
        });
      }
      return userRef;
    });
  };

  /**
   * Checks if a holding document exists
   * @param {DocumentReference} userRef The user document reference
   * @param {string} symbol The holding symbol
   * @returns  True if the holding document exists, false otherwise
   * */
  const checkHoldingExists = (userRef, symbol) => {
    const holdingRef = doc(userRef, 'holdings', symbol);
    return getDoc(holdingRef).then((docSnap) => docSnap.exists());
  };

  /**
   * Adds or updates a holding document
   * @param {string} userId The user ID
   * @param {object} holding The holding object
   * @returns
   * */
  const addOrUpdateHolding = async (userId, holding) => {
    try {
      const userRef = await retrieveOrCreateUser(userId);
      const holdingExists = await checkHoldingExists(userRef, holding.symbol);

      if (holdingExists) {
        const transactionsCol = collection(userRef, 'holdings', holding.symbol, 'transactions');
        await addDoc(transactionsCol, holding.transaction);
        console.log('Transaction added to existing holding.');
      } else {
        const holdingRef = doc(userRef, 'holdings', holding.symbol);
        await setDoc(holdingRef, {
          name: holding.name,
          ticker: holding.symbol,
          currency: holding.currency,
          sector: holding.sector,
        });
        const transactionsCol = collection(holdingRef, 'transactions');
        await addDoc(transactionsCol, holding.transaction);
        console.log('New holding created and transaction added.');
      }
    } catch (e) {
      setError(e);
      console.error('Error handling document: ', e);
    }
  };

  /**
   * Deletes a transaction from a holding document
   * @param {string} userId The user ID
   * @param {string} symbol The holding symbol
   * @param {string} transactionId The transaction ID
   * @returns
   * */
  const deleteTransaction = async (userId, symbol, transactionId) => {
    if (!userId || !symbol || !transactionId) {
      console.error('Missing required parameters: userID, symbol, or transactionID are undefined.');
      return;
    }

    try {
      const userRef = await retrieveOrCreateUser(userId);
      const transactionRef = doc(db, 'users', userId, 'holdings', symbol, 'transactions', transactionId);
      await deleteDoc(transactionRef);
      console.log('Transaction deleted successfully.');

      // Check if there are any transactions left
      const transactionsCol = collection(userRef, 'holdings', symbol, 'transactions');
      const snapshot = await getDocs(query(transactionsCol));
      if (snapshot.empty) {
        const holdingRef = doc(userRef, 'holdings', symbol);
        await deleteDoc(holdingRef);
        console.log('Holding document deleted successfully as it had no more transactions.');
      }
    } catch (e) {
      console.error('Error deleting transaction: ', e);
      setError(e.message);
    }
  };

  // Returns
  return { addOrUpdateHolding, deleteTransaction, error };
}
