import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';

/**
 * Fetches user data from Firestore
 * @param {string} userId The user ID
 * @returns The user data
 */
const fetchUserData = async (userId) => {
  try {
    const userData = {
      userId: userId,
      holdings: [],
    };

    // get user document reference
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      console.log('No such user!');
      return null; // or return userData to indicate an empty structure
    }

    // get holdings collection for the user
    const holdingsCol = collection(userRef, 'holdings');
    const holdingsSnapshot = await getDocs(holdingsCol);

    for (const holdingDoc of holdingsSnapshot.docs) {
      const holdingData = holdingDoc.data();
      const transactionsCol = collection(holdingDoc.ref, 'transactions');
      const transactionsSnapshot = await getDocs(transactionsCol);

      // map transactions data
      const transactions = transactionsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // append the holding data and its transactions to userData
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
