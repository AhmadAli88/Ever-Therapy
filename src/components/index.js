import React from 'react';
const NoPage = React.lazy(() => import('../pages/NoPage'));
const SignIn = React.lazy(() => import('../pages/SignIn'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const LandingPage = React.lazy(() => import('../pages/LandingPage'));

const WEB_PAGES = {
  SIGN_IN: SignIn,
  DASHBOARD: Dashboard,
  LANDING_PAGE: LandingPage,
  NO_PAGE: NoPage,
};

export { WEB_PAGES };
