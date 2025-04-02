import { createRoot } from 'react-dom/client'
import { NoteProvider } from './context/Context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <NoteProvider>
    <App />
  </NoteProvider>,
)
