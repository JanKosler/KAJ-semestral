import React from 'react';
import PathConstants from './paths';

/**
 * Components object, used to lazy load the components for the routes.
 */
const Components = {
  Homepage: React.lazy(() => import('../pages/homepage')),
  LoginPage: React.lazy(() => import('../pages/auth')),
  RegisterPage: React.lazy(() => import('../pages/auth/signup')),
  AddTransactionPage: React.lazy(() => import('../pages/transactions')),
  ErrorPage: React.lazy(() => import('../pages/error')),
  TickerDetailPage: React.lazy(() => import('../pages/tickerDetail')),
};

/**
 * Routes object used in react router, used to define the routes for the application.
 */
const routes = [
  {
    path: PathConstants.HOME,
    element: <Components.Homepage />,
  },
  {
    path: PathConstants.LOGIN,
    element: <Components.LoginPage />,
  },
  {
    path: PathConstants.SIGNUP,
    element: <Components.RegisterPage />,
  },
  {
    path: PathConstants.TRANSACTION_NEW,
    element: <Components.AddTransactionPage />,
  },
  {
    path: PathConstants.DETAIL,
    element: <Components.TickerDetailPage />,
  },

  {
    path: PathConstants.ERROR,
    element: <Components.ErrorPage />,
  },
  {
    path: '*',
    element: <Components.ErrorPage />,
  },
];

export default routes;
