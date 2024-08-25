import './css/app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'
import About from './components/About'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/informacion" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
