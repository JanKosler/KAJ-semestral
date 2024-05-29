import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import LoginPage from './pages/auth/index.jsx';
import SignUpPage from './pages/auth/signup.jsx';
import Homepage from './pages/portfolio/index.jsx';
import { AuthProvider } from './context/auth/index.js';

const App = () => {
  // Add the imported icons to the library
  library.add(fas, faTwitter, faFontAwesome);

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={ <LoginPage /> } ></Route>
            <Route path="signup" element={ <SignUpPage /> } ></Route>
            <Route path="home" element={ <Homepage /> } ></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
  
}

export default App;
