import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="container">
       <Header />
      <Routes>
        <Route path ='/footer' element={<Footer/>}/>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
