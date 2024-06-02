import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../../config/auth';
import { ErrorMessage, FormHeader, FormInput, FormLabel } from '../../component/form/StyledForm';

import PathConstants from '../../routing/paths';

/**
 * Register page, handles form and sign up
 */
const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return; // Exit if passwords do not match
    }
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
      } catch (error) {
        setError(error.message.replace('Firebase:', ''));
        setIsRegistering(false);
      }
    }
  };

  return (
    <div className="w-full h-screen flex self-center place-content-center place-items-center">
      <section className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
        <FormHeader>Create a New Account</FormHeader>
        <form onSubmit={onSubmit} className="space-y-4">
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
              disabled={isRegistering}
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>

            <FormInput
              id="confirmPassword"
              disabled={isRegistering}
              name="confirmPassword"
              type="password"
              autoComplete="off"
              required
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
            />
          </div>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <button
            type="submit"
            disabled={isRegistering}
            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
              isRegistering
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'
            }`}
          >
            {isRegistering ? 'Signing Up...' : 'Sign Up'}
          </button>
          <div className="text-sm text-center">
            Already have an account? {'   '}
            <Link to={PathConstants.LOGIN} className="text-center text-sm hover:underline font-bold">
              Continue
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
