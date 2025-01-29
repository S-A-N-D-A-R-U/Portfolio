import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import emailjs from '@emailjs/browser';
import App from './App.tsx'


emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
