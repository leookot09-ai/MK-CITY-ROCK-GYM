import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './MkCityRockGym.jsx' // 👈 Make sure this matches your filename
import './styles/global.css' // If you have this file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)