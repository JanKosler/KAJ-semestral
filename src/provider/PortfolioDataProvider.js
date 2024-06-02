import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/auth';
import PortfolioDataProcessor from '../component/graph/utils/PortfolioDataProcessor';
import fetchUserData from '../hooks/utils/fetchUserData';

const PortfolioDataContext = createContext();

/**
 * Portfolio data provider, provides data fetched from the database
 * @returns
 */
export const PortfolioDataProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [dataProcessor, setDataProcessor] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch or refresh user data
  const refreshUserData = useCallback(() => {
    if (currentUser && currentUser.uid) {
      setIsLoading(true);
      fetchUserData(currentUser.uid)
        .then((data) => {
          setUserData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching data:', err);
          setError(err);
          setIsLoading(false);
        });
    } else {
      console.log('No user or user ID available.');
      setIsLoading(false);
    }
  }, [currentUser]);

  // effect to fetch data on user change
  useEffect(() => {
    refreshUserData();
  }, [refreshUserData]);

  useEffect(() => {
    if (userData) {
      console.log('Starting data processing...');
      try {
        const processor = new PortfolioDataProcessor(userData);
        processor.processData();
        setDataProcessor(processor);
        setProcessedData(processor.getProcessedData());
      } catch (error) {
        console.error('Error during data processing:', error);
        setError(error);
      }
    }
  }, [userData]);

  return (
    <PortfolioDataContext.Provider value={{ dataProcessor, processedData, isLoading, error, refreshUserData }}>
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = () => useContext(PortfolioDataContext);
