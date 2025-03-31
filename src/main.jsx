import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterProvider } from './context/context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <App />
  </CounterProvider>,
)
