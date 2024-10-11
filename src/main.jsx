import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SidebarProvider } from './context/sidebarContext.jsx'

createRoot(document.getElementById('root')).render(

  <SidebarProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </SidebarProvider>
)
