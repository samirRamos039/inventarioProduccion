import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Product'
import Login from './Login'

function Rutas() {
    <BrowserRouter>
        <Routes>
            <Route path='/Product' element={<Product />} />
            <Route path='/Login' element={<Login />} />
        </Routes>
    </BrowserRouter>
}
export default Rutas
