import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import "./assets/Server"
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout'

import "./assets/Server"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail/>}/>
        <Route path="/host" element={<Dashboard/>}> </Route>
        <Route path="/host/income" element={</>}> </Route>
        <Route path="/host/reviews" element={</>}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);