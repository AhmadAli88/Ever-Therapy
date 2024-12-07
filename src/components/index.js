import React from 'react';

const SignIn = React.lazy(() => import('./SignIn.jsx'));
const Dashboard = React.lazy(() => import('../pages/Dashboard.jsx'));

const WEB_PAGES = {
  SIGN_IN: SignIn,
  DASHBOARD: Dashboard,
};

export { WEB_PAGES };
