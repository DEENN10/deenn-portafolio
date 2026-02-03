import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import App from './App'

// ...existing code...
const container = document.getElementById('root')
if (!container) {
  console.error('No se encontró el elemento #root. Asegúrate de tener <div id="root"></div> en tu index.html')
  throw new Error('Root element not found')
}
createRoot(container).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
// ...existing code...
