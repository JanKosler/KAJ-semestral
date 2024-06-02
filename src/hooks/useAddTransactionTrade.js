import { useState, useEffect } from 'react';
import { db } from '../config/firebase-config';
import { doc, getDoc, setDoc, addDoc, collection, deleteDoc, query, getDocs } from 'firebase/firestore';

const useHoldings = () => {
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

  const retrieveOrCreateUser = async () => {
    if (!userId) {
      console.error('No user ID found in local storage.');
      return null;
    }
    const userRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {});
      console.log('User document created!');
    }
    return userRef;
  };

  const checkHoldingExists = async (symbol) => {
    const userRef = await retrieveOrCreateUser();
    if (!userRef) return false;
    const holdingRef = doc(userRef, 'holdings', symbol);
    const docSnap = await getDoc(holdingRef);
    return docSnap.exists();
  };

  const addOrUpdateHolding = async (holding) => {
    try {
      const userRef = await retrieveOrCreateUser();
      if (!userRef) return;
      const holdingExists = await checkHoldingExists(holding.symbol);

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

  const deleteTransaction = async (symbol, transactionId) => {
    const userRef = await retrieveOrCreateUser();
    if (!userRef) return;
    try {
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
      setError(e.message);
      console.error('Error deleting transaction: ', e);
    }
  };

  return { addOrUpdateHolding, deleteTransaction, error };
};

export default useHoldings;
