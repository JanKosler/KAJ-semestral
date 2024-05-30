import React from 'react';
import PathConstants from './paths';

const Components = {
  Homepage: React.lazy(() => import('../pages/portfolio')),
  LoginPage: React.lazy(() => import('../pages/auth')),
  RegisterPage: React.lazy(() => import('../pages/auth/signup')),
  AddTransactionPage: React.lazy(() => import('../pages/transactions')),
};

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
];

export default routes;
