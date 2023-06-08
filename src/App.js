import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Academy from './pages/Academy';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/academy' element={<Academy/>} />
        {/* <Route exact path='/aboutMe' element={<AboutMe/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
