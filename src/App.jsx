import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialButtons from './components/SocialButtons'
import Home from './pages/Home'
import Exercises from './pages/Exercises'
import BoneStructure from './pages/BoneStructure'
import BoneDetail from './pages/BoneDetail'
import Machines from './pages/Machines'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Gallery from './pages/Gallery'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:painArea" element={<Exercises />} />
        <Route path="/bone-structure/:boneId" element={<BoneDetail />} />
        <Route path="/bone-structure" element={<BoneStructure />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <SocialButtons />
    </div>
  )
}

export default App
