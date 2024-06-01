import React, { Suspense } from 'react';
import { useAuth } from '../context/auth';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './nav/Header';

import styled from 'styled-components';
import PathConstants from '../routing/paths';
import LoadingPage from '../pages/loading';

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
        <Suspense fallback={<LoadingPage />}>
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
  className: 'bg-gray-50',
})`
  grid-area: body;
  overflow-y: auto;
  min-height: calc(100vh - 73px);
`;
