import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'



import Nav from './view/nav/Nav';
import NavItem from './view/nav/NavItem';

import ButtonSimple from './view/button/ButtonSimple';

import InfoCard from './view/card/InfoCard';
import Gallery from './view/mainGallery/Gallery.js';
import LargeGraph from './view/graph/SectorGraph.js';
import PortfolioScreen from './view/screens/PortfolioScreen.js';


import Card from './view/card/Card.js';

function App() {
  // Add the imported icons to the library
  library.add(fas, faTwitter, faFontAwesome);

  return (
    <div className="bg-zinc-50">
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

export default App;
