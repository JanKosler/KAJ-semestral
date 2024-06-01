import React, { Suspense } from 'react';
import { useAuth } from '../context/auth';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './nav/Header';

import styled from 'styled-components';
import PathConstants from '../routing/paths';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const location = useLocation();
  const publicPaths = [PathConstants.LOGIN, PathConstants.SIGNUP]; // Paths that don't require authentication

  // Check if the current path is one of the public paths
  const isPublicRoute = publicPaths.includes(location.pathname);

  if (userLoggedIn && isPublicRoute) {
    navigate(PathConstants.HOME);
    return;
  }

  return userLoggedIn || isPublicRoute ? (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Page>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Page>
    </Container>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 73px 1fr;
  grid-template-areas:
    'header'
    'body';
`;

const HeaderContainer = styled.div`
  grid-area: header;
`;

const Page = styled.div.attrs({
  className: 'pb-20 bg-gray-50 min-h-screen',
})`
  grid-area: body;
  overflow-y: auto;
`;