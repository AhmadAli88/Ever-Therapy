import React from 'react';

const SignUp= React.lazy(() => import('../pages/SignUp'));
const SignIn = React.lazy(() => import('../pages/SignIn'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const LandingPage = React.lazy(() => import('../pages/LandingPage'));
const ForgotPassword = React.lazy(() => import('../pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('../pages/ResetPassword'));
const NoPage = React.lazy(() => import('../pages/NoPage'));

const WEB_PAGES = {
  SIGN_UP:SignUp,
  SIGN_IN: SignIn,
  DASHBOARD: Dashboard,
  LANDING_PAGE: LandingPage,
  NO_PAGE: NoPage,
  FORGOT_PASSWORD: ForgotPassword,
  RESET_PASSWORD: ResetPassword,
};

export { WEB_PAGES };
