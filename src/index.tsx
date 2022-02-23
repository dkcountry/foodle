import React from 'react'
import ReactDOM from 'react-dom'
import HttpsRedirect from 'react-https-redirect'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </React.StrictMode>,
  document.getElementById('root')
)
