//import modules
import React from 'react'
import ReactDOM from 'react-dom/client'

//import app
import { App } from './App'

//import styles
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
