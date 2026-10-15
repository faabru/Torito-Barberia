import React from 'react'
import { createRoot } from 'react-dom/client'

/* Tipografías alojadas localmente (@fontsource) — 2 familias, 3 pesos, subset latin */
import '@fontsource/oswald/latin-500.css'
import '@fontsource/oswald/latin-700.css'
import '@fontsource/inter/latin-400.css'

import './styles/variables.css'
import './styles/base.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
