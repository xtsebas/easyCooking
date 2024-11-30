import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<h1>Categorías</h1>} />
          <Route path="/ingredients" element={<h1>Ingredientes</h1>} />
          <Route path="/difficulty" element={<h1>Dificultad</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
