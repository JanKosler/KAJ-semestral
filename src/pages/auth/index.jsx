import React from 'react';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import { doSignInWithEmailAndPassword } from '../../config/auth';
import {
  FormLabel,
  FormHeader,
  ErrorMessage,
  FormInput,
  FormContainer,
  CenterContainer,
} from '../../component/form/StyledForm';

import PathConstants from '../../routing/paths';

/**
 * LoginPage, handles form and sign in
 */
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        setIsSigningIn(false);
      } catch (error) {
        setError(error.message.replace('Firebase:', ''));
        setIsSigningIn(false);
      }
    }
  };

  return (
    <CenterContainer>
      <FormContainer>
        <FormHeader>Welcome Back</FormHeader>
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
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
              id="password"
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
          <Link to={PathConstants.SIGNUP} className="hover:underline font-bold">
            Sign up
          </Link>
        </p>
      </FormContainer>
    </CenterContainer>
  );
};

export default LoginPage;
