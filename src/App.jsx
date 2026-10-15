import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Hombres from './pages/Hombres.jsx'
import Peluquero from './pages/Peluquero.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hombres" element={<Hombres />} />
        <Route path="/peluquero" element={<Peluquero />} />
      </Routes>
    </BrowserRouter>
  )
}