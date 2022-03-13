import React from 'react'
import ReactDOM from 'react-dom'
import HttpsRedirect from 'react-https-redirect'
import './index.css'
import App from './App'
import amplitude from 'amplitude-js'

amplitude.getInstance().init(process.env.REACT_APP_ANALYTICS_KEY || '')

ReactDOM.render(
  <React.StrictMode>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </React.StrictMode>,
  document.getElementById('root')
)
