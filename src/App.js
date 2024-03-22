import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'



import Nav from './view/nav/Nav';
import NavItem from './view/nav/NavItem';

import ButtonArrow from './view/button/ButtonArrow';
import ButtonSimple from './view/button/ButtonSimple';

import InfoCard from './view/cards/InfoCard';

import PayrollCalculatorForm from './view/form/PayrollCalculatorForm';


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
        <PayrollCalculatorForm></PayrollCalculatorForm>
      </div>
    </div >
  );
}

/* 
        <InfoCard title="realizovaný zisk" href="/lol">
          <p>World</p>
        </InfoCard>
        */

export default App;
