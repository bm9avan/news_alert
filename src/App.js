import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import IndianNews from './components/pages/IndianNews'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/in" element={<IndianNews />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
