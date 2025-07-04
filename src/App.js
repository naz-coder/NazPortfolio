import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Podcast from './pages/Podcast';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/podcast' element={<Podcast/>} />
      </Routes>
    </Router>

  );
}

export default App;
