// Example of using fetchUserData in a React component
import { useState, useEffect } from 'react';
import { useAuth } from '../context/auth';
import fetchUserData from './utils/fetchUserData';

/**
 * Fetches the user data from the database
 * @returns  The user data, loading state and error
 */
function useFetchUserData() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      setIsLoading(true);
      fetchUserData(currentUser.uid)
        .then((data) => {
          setUserData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [currentUser]);

  return { userData, isLoading, error };
}

export default useFetchUserData;
