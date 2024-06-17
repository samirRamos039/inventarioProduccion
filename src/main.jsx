import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './component/Login'
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Product } from './component/Product'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Product/>
  </React.StrictMode>,
)
