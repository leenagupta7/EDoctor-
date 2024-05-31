import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import { CartProvider } from './Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <Auth0Provider
    domain="dev-iujuk8p50ajand6f.us.auth0.com"
    clientId="OA30Ppd2aPRvTV0srKinZ7ojx0sblpm0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <CartProvider>
      <App />
    </CartProvider>
  </Auth0Provider>
  </React.StrictMode>
  ,
)
