import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="/PokieDetails/:name" element={<PokieDetails/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
