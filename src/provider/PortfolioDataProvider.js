import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '../context/auth';
import PortfolioDataProcessor from '../component/graph/utils/PortfolioDataProcessor';
import fetchUserData from '../hooks/utils/fetchUserData';

const PortfolioDataContext = createContext();

export const PortfolioDataProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [dataProcessor, setDataProcessor] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      setIsLoading(true);
      fetchUserData(currentUser.uid)
        .then((data) => {
          setUserData(data);
          setIsLoading(false); // Confirm this is being hit
        })
        .catch((err) => {
          console.error('Error fetching data:', err);
          setError(err);
          setIsLoading(false); // Confirm this is being hit
        });
    } else {
      setIsLoading(false); // Make sure to handle case where currentUser is null
      console.log('No user or user ID available.');
    }
  }, [currentUser]);

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
    <PortfolioDataContext.Provider value={{ dataProcessor, processedData, isLoading, error }}>
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = () => useContext(PortfolioDataContext);
