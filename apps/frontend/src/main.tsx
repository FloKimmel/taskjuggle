import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { App } from './App.tsx';
import { AuthContextProvider } from './contexts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <CssBaseline />
      <App />
    </AuthContextProvider>
  </StrictMode>,
);
