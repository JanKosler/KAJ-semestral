import { useState } from 'react';
import { db } from '../config/firebase-config';
import { doc, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';

export function useHoldings() {
  const [error, setError] = useState(null);

  const retrieveOrCreateUser = (userId) => {
    const userRef = doc(db, 'users', userId);
    return getDoc(userRef).then((docSnap) => {
      if (!docSnap.exists()) {
        return setDoc(userRef, {}) // Initialize with an empty object or predefined structure
          .then(() => {
            console.log('User document created!');
            return userRef;
          });
      }
      return userRef;
    });
  };

  const checkHoldingExists = (userRef, symbol) => {
    const holdingRef = doc(userRef, 'holdings', symbol);
    return getDoc(holdingRef).then((docSnap) => docSnap.exists());
  };

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

  return { addOrUpdateHolding, error };
}
