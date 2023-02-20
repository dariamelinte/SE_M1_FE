import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css';

import type { AppProps } from 'next/app';
import { AuthProvider } from 'react-oidc-context';
import { ToastContainer } from 'react-toastify';

const replaceState = (_user: any | void): void => {
  window.history.replaceState({}, document.title, window.location.pathname);
  // eslint-disable-next-line no-console
  // console.log(_user);
};

const oidConfig = {
  authority: 'https://admin-auth-kc.asii.ro/realms/fiicode/',
  client_id: 'fiicode-main',
  redirect_uri: 'https://fiicode.asii.ro/',
  // redirect_uri: 'http://localhost:3000/',
  metadataUrl:
    'https://admin-auth-kc.asii.ro/realms/fiicode/.well-known/openid-configuration',
  onSigninCallback: replaceState,
  loadUserInfo: true,
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider {...oidConfig}>
    <Component {...pageProps} />
    <ToastContainer />
  </AuthProvider>
);

export default MyApp;
