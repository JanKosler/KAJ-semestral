// src/services/firestoreService.js or in your useHoldings.js hook
import { db } from '../config/firebase-config';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

const fetchUserData = async (userId) => {
  try {
    const userData = {
      userId: userId,
      holdings: [],
    };

    // Get user document reference
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      console.log('No such user!');
      return null; // or return userData to indicate an empty structure
    }

    // Get holdings collection for the user
    const holdingsCol = collection(userRef, 'holdings');
    const holdingsSnapshot = await getDocs(holdingsCol);

    for (const holdingDoc of holdingsSnapshot.docs) {
      const holdingData = holdingDoc.data();
      const transactionsCol = collection(holdingDoc.ref, 'transactions');
      const transactionsSnapshot = await getDocs(transactionsCol);

      // Map transactions data
      const transactions = transactionsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Append the holding data and its transactions to userData
      userData.holdings.push({
        id: holdingDoc.id,
        ...holdingData,
        transactions: transactions,
      });
    }

    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // rethrow or handle as needed
  }
};

export default fetchUserData;
