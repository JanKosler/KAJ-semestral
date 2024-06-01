import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './component/Layout.jsx';

import { AuthProvider } from './context/auth/index.js';
import routes from './routing/routes.js';
import ErrorBoundary from './pages/error/ErrorBoundary.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
]);

const App = () => {
  // Add the imported icons to the library
  library.add(fas, faTwitter, faFontAwesome);

  return (
    <div className="App">
      <ErrorBoundary>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
