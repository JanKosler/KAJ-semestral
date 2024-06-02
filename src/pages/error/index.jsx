import React from 'react';
import AnimatedCubeSpinner from '../../component/loading/AnimatedCubeSpinner';
import ButtonSimple from '../../component/button/ButtonSimple';
import PathConstants from '../../routing/paths';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

/**
 * ErrorPage, shown when something goes wrong. Shows a message and a spinner
 */
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
      <Text>Something went wrong. We can't find the page you're looking for.</Text>
      <div className="mb-8">
        <AnimatedCubeSpinner />
      </div>
      <Text>Try going back to our homepage or contact support if the problem persists.</Text>
      <ButtonSimple onClick={() => navigate(PathConstants.HOME)}>Go to Homepage</ButtonSimple>
    </Container>
  );
};

export default ErrorPage;

const Container = styled.div.attrs({
  className: 'error-page flex flex-col items-center justify-start pt-40 p-4 bg-gray-100 text-center',
})`
  height: 100%;
`;

const Text = styled.p.attrs({
  className: 'text-lg text-gray-600 mb-6',
})``;
