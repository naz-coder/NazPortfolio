import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutMe from './components/about/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path='/aboutMe' component={AboutMe} /> */}
        {/* <Route exact path='/aboutMe' element={<AboutMe/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
