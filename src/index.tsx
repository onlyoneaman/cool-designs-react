import App from './App.tsx';
import './App.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {GlobalProvider} from "@/context/GlobalContext.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </StrictMode>,
);
