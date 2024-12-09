import { PATH } from '../config';
import { WEB_PAGES } from '../components';

export const INITIAL_VALUE = [
  {

    path: PATH.SIGN_UP,
    page: <WEB_PAGES.SIGN_UP />,
    route: 'PublicRoute',
  },
  {
    path: PATH.SIGN_IN,
    page: <WEB_PAGES.SIGN_IN />,
    route: 'PublicRoute',
  },
  {
    path: PATH.FORGOT_PASSWORD,
    page: <WEB_PAGES.FORGOT_PASSWORD />,
    route: 'PublicRoute',
  },
  {
    path: PATH.RESET_PASSWORD,
    page: <WEB_PAGES.RESET_PASSWORD />,
    route: 'PublicRoute',
  },

  {
    path: PATH.DASHBOARD,
    page: <WEB_PAGES.DASHBOARD />,
    route: 'PrivateRoute',
  },
  {
    path: PATH.LANDING_PAGE,
    page: <WEB_PAGES.LANDING_PAGE />,
    route: 'ModerateRoute',
  },
];
