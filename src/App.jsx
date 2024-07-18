import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeLayout from './Components/HomeLayout'
import About from './Components/About'
import Contact from './Components/Contact'
import Service from './Components/Service'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
