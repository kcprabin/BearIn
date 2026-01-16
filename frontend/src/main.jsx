import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authentication from './auth/Authentication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
    <App />
    </Authentication>
  </StrictMode>,
)
