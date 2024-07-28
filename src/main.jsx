import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './Context.jsx';
import { SocketContextProvider } from './socketcontext.jsx';
import { AuthContextProvider } from './AuthContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>
  ,
)
