import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';
import AuthProvider from './Provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className='max-w-screen-xl mx-auto dark:bg-gray-900 transition-colors duration-300'>
          <RouterProvider router={Router} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
