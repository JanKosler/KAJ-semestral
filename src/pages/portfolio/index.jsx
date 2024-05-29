import React from 'react';


import ButtonSimple from '../../component/button/ButtonSimple';
import Nav from '../../component/nav/Nav';
import PortfolioScreen from '../../component/screens/PortfolioScreen';
import NavItem from '../../component/nav/NavItem';

const Homepage = () => {
    return (
        <div className="bg-gray-50">
          <Nav
            buttons={
              <>
                <ButtonSimple>Login</ButtonSimple>
                <ButtonSimple>Register</ButtonSimple>
              </>
            }>
            <NavItem href="/overview">Investing</NavItem>
            <NavItem href="/lol">Profits</NavItem>
            <NavItem href="/lol">Dividends</NavItem>
          </Nav>
          <div style={{ padding: 100 + 'px', height: 2000 + "px", width: 100 + "%" }}>
            <PortfolioScreen />
          </div>
        </div >
  );
}

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