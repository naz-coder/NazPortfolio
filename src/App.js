import React, {useState} from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Academy from './pages/Academy';
import Resume from './pages/Resume';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/academy' element={<Academy/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
    </Router>

  );
}

export default App;
