import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MaintenancePage from './components/MaintenancePage.jsx'
import './index.css'
import App from './App.jsx'
const isMaintenanceMode = false

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {isMaintenanceMode ? <MaintenancePage /> : <App />}
    </StrictMode>
)