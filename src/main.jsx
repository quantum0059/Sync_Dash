import React from 'react'
// import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/ContextProvider.jsx';
import { registerLicense } from '@syncfusion/ej2-base'

// Paste your license key here — keep it as a single string without line breaks
registerLicense('ORg4AjUWIQA/Gnt2XFhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5WdUVjUX1adXJTRmhZWkZ/')

const root = createRoot(document.getElementById('root')); // ✅ createRoot instead of render
root.render(
  <React.StrictMode>
       <ContextProvider>
            <App />
       </ContextProvider>
  </React.StrictMode>
  
);