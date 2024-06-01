// Example of using fetchUserData in a React component
import { useState, useEffect } from 'react';
import { fetchUserData } from '../services/firestoreService';
import { useAuth } from '../context/auth';

function useFetchUserData() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      setLoading(true);
      fetchUserData(currentUser.uid)
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [currentUser]);

  return { userData, loading, error };
}

export default useFetchUserData;
