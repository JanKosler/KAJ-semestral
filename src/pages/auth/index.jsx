import React from 'react';

import { Navigate, Link } from 'react-router-dom';

import { useState } from 'react';

import { useAuth } from '../../context/auth/index';
import { doSignInWithEmailAndPassword } from '../../config/auth';
import { FormLabel, FormHeader, ErrorMessage, FormInput } from '../../component/form/StyledForm';

const LoginPage = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
  };
  return (
    <div>
      {userLoggedIn && <Navigate to={'/home'} replace={true} />}

      <main className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
          <FormHeader>Welcome Back</FormHeader>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <button
              type="submit"
              disabled={isSigningIn}
              className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                isSigningIn
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'
              }`}
            >
              {isSigningIn ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link to={'/register'} className="hover:underline font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
