import React from 'react';

import PortfolioScreen from '../../component/screens/PortfolioScreen.jsx';
import LoadingPage from '../loading/index.js';
import { usePortfolioData } from '../../provider/PortfolioDataProvider.js';
import ErrorPage from '../error/index.jsx';
import AddDataPage from '../loading/addDataPage.js';
/**
 * Homepage component, the main page of the application
 */
const Homepage = () => {
  const { dataProcessor, processedData, isLoading, error } = usePortfolioData();

  // show loading page if loading
  if (isLoading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  // if no data, show add data page
  if (!dataProcessor || !processedData || dataProcessor.isDataEmpty()) return <AddDataPage />;

  return <PortfolioScreen processedData={processedData} dataProcessor={dataProcessor} />;
};

export default Homepage;
