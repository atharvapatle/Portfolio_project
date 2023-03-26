import {Routes,Route} from 'react-router-dom'
import React from 'react'
import './index.css'
import About from './routes/About'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Project from './routes/Project'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
