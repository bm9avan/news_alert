import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import IndianNews from './components/pages/IndianNews'
import './App.css'
import { Description } from './store/desc-context'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  const ctx=useContext(Description)
  let { hideDesc: hideDesc, descHandler : descHandler}= ctx
  return (
    <>
      <NavBar hideDesc={hideDesc} descHandler={descHandler} />
      <Router>
        <Routes>
          <Route path="/" element={<Home hideDesc={hideDesc} />} />
          <Route path="/in" element={<IndianNews hideDesc={hideDesc} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
