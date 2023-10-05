import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';



function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
