import '../styles/global.css';

import type { AppProps } from 'next/app';
import { AuthProvider } from 'react-oidc-context';

const replaceState = (_user: any | void): void => {
  window.history.replaceState({}, document.title, window.location.pathname);
  // eslint-disable-next-line no-console
  console.log(_user);
};

const oidConfig = {
  authority: 'https://admin-auth-kc.asii.ro/realms/fiicode/',
  client_id: 'fiicode-main',
  redirect_uri: 'http://localhost:3000/',
  metadataUrl:
    'https://admin-auth-kc.asii.ro/realms/fiicode/.well-known/openid-configuration',
  onSigninCallback: replaceState,
  loadUserInfo: true,
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider {...oidConfig}>
    <Component {...pageProps} />
  </AuthProvider>
);

export default MyApp;
