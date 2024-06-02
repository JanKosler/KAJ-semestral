import React, { Suspense, useEffect } from 'react';
import { useAuth } from '../context/auth';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './nav/Header';
import styled from 'styled-components';
import PathConstants from '../routing/paths';
import LoadingPage from '../pages/loading';
import { PortfolioDataProvider } from '../provider/PortfolioDataProvider';

const Layout = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const isPublicRoute = [PathConstants.LOGIN, PathConstants.SIGNUP].includes(location.pathname);
    if (userLoggedIn && isPublicRoute) {
      navigate(PathConstants.HOME);
    }
  }, [userLoggedIn, location.pathname, navigate]);

  // Determine if it's a public route and user should see the content without redirection
  const isPublicRoute = [PathConstants.LOGIN, PathConstants.SIGNUP].includes(location.pathname);

  if (!userLoggedIn && !isPublicRoute) {
    return <Navigate to="/login" replace />;
  }

  return (
    <PortfolioDataProvider>
      <LayoutContainer>
        <HeaderSection>
          <Header />
        </HeaderSection>
        <MainContent>
          <Suspense fallback={<LoadingPage />}>
            <Outlet />
          </Suspense>
        </MainContent>
      </LayoutContainer>
    </PortfolioDataProvider>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 73px 1fr;
  grid-template-areas:
    'header'
    'body';
`;

const HeaderSection = styled.header`
  grid-area: header;
`;

const MainContent = styled.main.attrs({
  className: 'bg-gray-50',
})`
  grid-area: body;
  overflow-y: auto;
  min-height: calc(100vh - 73px);
`;
