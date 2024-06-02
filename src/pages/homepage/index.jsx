import React from 'react';

import PortfolioScreen from '../../component/screens/PortfolioScreen.jsx';
import LoadingPage from '../loading/index.js';
import { usePortfolioData } from '../../provider/PortfolioDataProvider.js';
import ErrorPage from '../error/index.jsx';
/**
 * Homepage component, the main page of the application
 */
const Homepage = () => {
  const { dataProcessor, processedData, isLoading, error } = usePortfolioData();

  if (isLoading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return <PortfolioScreen processedData={processedData} dataProcessor={dataProcessor} />;
};

export default Homepage;
