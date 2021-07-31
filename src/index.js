import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

render(
  <React.StrictMode>
    <Auth0Provider
      domain="rajatgupta24.us.auth0.com"
      clientId="PxIiP07Zo9Q3VQc7mcHy4S1RwD04XSXD"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
