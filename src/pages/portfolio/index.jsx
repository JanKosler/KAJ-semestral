import React from 'react';

import PortfolioScreen from '../../component/screens/PortfolioScreen';
import useFetchUserData from '../../hooks/useFetchUserData.js';
import LoadingPage from '../loading/index.js';
/**
 * Homepage
 */
const Homepage = () => {
  // const { userLoggedIn } = useAuth();
  const { userData, isLoading } = useFetchUserData();

  return isLoading ? <LoadingPage /> : <PortfolioScreen userData={userData} />;
};

export default Homepage;
