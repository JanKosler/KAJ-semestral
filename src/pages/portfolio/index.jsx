import React from 'react';

import ButtonSimple from '../../component/button/ButtonSimple';
import Nav from '../../component/nav/Nav';
import PortfolioScreen from '../../component/screens/PortfolioScreen';
import NavItem from '../../component/nav/NavItem';
import { useAuth } from '../../context/auth';
import { doSignOut } from '../../config/auth';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Homepage
 */
const Homepage = () => {
  const { userLoggedIn } = useAuth();

  return (
    <div className="bg-gray-50 px-12 h-screen w-full">
      <PortfolioScreen />
    </div>
  );
};

/*
<Gallery
  child1={<InfoCard title="realizovaný zisk" href="/lol" />}
  child2={<InfoCard title="realizovaný zisk" href="/lol" />}
  child3={<InfoCard title="realizovaný zisk" href="/lol" />}
  child4={<InfoCard title="realizovaný zisk" href="/lol" />}
  child5={<InfoCard title="realizovaný zisk" href="/lol" />}
  child6={<InfoCard title="realizovaný zisk" href="/lol" />}
/>

<InfoCard title="realizovaný zisk" href="/lol">
</InfoCard>

<InfoCard title="realizovaný zisk" href="/lol">
  <p>World</p>
</InfoCard>
*/

export default Homepage;
