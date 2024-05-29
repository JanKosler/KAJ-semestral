import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Login from './pages/auth/index.jsx';
import Homepage from './pages/portfolio/index.jsx';

const App = () => {
  // Add the imported icons to the library
  library.add(fas, faTwitter, faFontAwesome);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={ <Login /> } ></Route>
          <Route path="home" element={ <Homepage /> } ></Route>
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
