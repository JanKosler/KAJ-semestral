import React from 'react';
import AnimatedCubeSpinner from '../../component/loading/AnimatedCubeSpinner';

import styled from 'styled-components';

/**
 * LoadingPage, shown when the content is loading, utilizes { @see AnimatedCubeSpinner }
 */
const AddDataPage = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome. Please start by adding some data.</h1>
      <AnimatedCubeSpinner />
    </Container>
  );
};

export default AddDataPage;

const Container = styled.div.attrs({
  className: 'error-page flex flex-col items-center justify-start pt-40 p-4 bg-gray-100 text-center',
})`
  height: 100%;
`;
