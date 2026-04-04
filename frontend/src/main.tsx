import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </BrowserRouter>
    </StrictMode>,
);

requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        root.style.visibility = 'visible';
    });
});