import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Academy from './pages/Academy';
import Gallery from './pages/Gallery';
import Contact from "./pages/Contact";
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Podcast from './pages/Podcast';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/academy' element={<Academy/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/podcast' element={<Podcast/>} />
      </Routes>
    </Router>

  );
}

export default App;
