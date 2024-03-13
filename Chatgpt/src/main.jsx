import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
      <Toaster 
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '2rem',
            marginTop:'5rem',
            color: '#713200',
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
)
