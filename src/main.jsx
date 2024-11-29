import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className="dark:bg-DarkBg bg-lightBg overflow-hidden ">
  <StrictMode>
    <App />
  </StrictMode>
  </div>,
)
