const ERROR = {
  SYSTEM_ERROR: 'System error. Please try again later!',
};

const PATH = {
  SIGN_IN: '/',
  DASHBOARD: '/dashboard',
  LANDING_PAGE: '/landing-page',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  SIGN_UP: '/sign-up',
  NO_PAGE: '/no-page',
};

const APP_SETTINGS = {
  API_PATH: {
    ACCOUNT: {
      getToken: 'Account/GetToken',
    },
  },
};

const AZURE_BLOB_BASE_URL = 'blob_url_here';

const ROLE = {
  ADMIN1: 1,
  ADMIN2: 2,
  ADMIN3: 3,
};

const TOASTER_STYLING_VALUES = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const PAGINATION_PAGE_SIZE = 10;

export {
  ERROR,
  PATH,
  APP_SETTINGS,
  ROLE,
  TOASTER_STYLING_VALUES,
  AZURE_BLOB_BASE_URL,
  PAGINATION_PAGE_SIZE,
};
